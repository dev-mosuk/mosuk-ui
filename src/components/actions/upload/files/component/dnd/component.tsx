import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  MeasuringStrategy,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import classNames from 'classnames';
import React, { Children, ReactElement, ReactNode, cloneElement, isValidElement, useCallback, useContext } from 'react';
import { InputFilesContext } from '../component';
import styles from '../component.module.css';
import { UploadFilesDndProps } from './component.interface';
import { UploadFilesDndElementProps } from './element/component.interface';

const isInputFilesViewFile = (
  child: ReactNode
): child is ReactElement<UploadFilesDndElementProps> => {
  return (
    isValidElement<UploadFilesDndElementProps>(child) &&
    child.props !== undefined &&
    child.props.file !== undefined
  );
};

export function UploadFilesDnd({ ...rest }: UploadFilesDndProps) {
  const context = useContext(InputFilesContext);

  if (!context) {
    throw new Error('UploadFilesDnd должен использоваться только внутри компонента UploadFiles');
  }

  const { files, setFiles, setDraggedId } = context;

  const sortedFiles = [...files].sort((a, b) => a.position - b.position);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 1 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 0, tolerance: 5 } }),
  );

  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      setDraggedId(event.active.id as string);
    },
    [setDraggedId]
  );

  const handleDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      if (!over || active.id === over.id) {
        setDraggedId(null);
        return;
      }

      // Получаем текущие индексы в отсортированном массиве
      const sortedFilesArray = [...files].sort((a, b) => a.position - b.position);
      const activeIndex = sortedFilesArray.findIndex((item) => item.id === active.id);
      const overIndex = sortedFilesArray.findIndex((item) => item.id === over.id);

      if (activeIndex === -1 || overIndex === -1) {
        setDraggedId(null);
        return;
      }

      // Создаём новую копию массива с перемещёнными элементами
      const newItems = arrayMove(sortedFilesArray, activeIndex, overIndex);

      // Обновляем позиции всех элементов
      const updatedItems = newItems.map((item, index) => ({
        ...item,
        position: index * 10,
      }));

      // Обновляем состояние через контекст
      setFiles(updatedItems);
      setDraggedId(null);
    },
    [files, setFiles, setDraggedId]
  );

  if (!files || !Array.isArray(files) || files.length === 0) {
    return (
      <div {...rest} className={classNames('mosuk-upload-files-dnd', styles.dnd, rest?.className)}>{rest?.children}</div>
    );
  }

  const childrenArray = Children.toArray(rest?.children).filter(
    isInputFilesViewFile
  ) as ReactElement<UploadFilesDndElementProps>[];

  const otherChildren = Children.toArray(rest?.children).filter(
    (child) => !isInputFilesViewFile(child)
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      autoScroll={true}
      modifiers={[restrictToWindowEdges]}
      measuring={{
        droppable: {
          strategy: MeasuringStrategy.Always,
        },
      }}
    >
      <div {...rest} className={classNames('mosuk-upload-files-dnd', styles.dnd, rest?.className)}>
        <SortableContext
          items={sortedFiles.map((file) => file.id)}
          strategy={verticalListSortingStrategy}
        >
          {sortedFiles.map((file) => {
            const child = childrenArray.find((childEl) => childEl.props.file?.id === file.id);

            return child
              ? cloneElement(child, {
                key: file.id,
                file,
              })
              : null;
          })}
        </SortableContext>

        {otherChildren}
      </div>
    </DndContext>
  );
}
