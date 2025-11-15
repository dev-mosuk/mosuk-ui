import { useSortable } from '@dnd-kit/sortable';
import React, { CSSProperties, useContext } from 'react';
import { InputFilesContext } from '../../component';
import styles from '../../component.module.css';
import { InputFilesDndElementProps } from './component.interface';

export function InputFilesDndElement({ file, ...props }: InputFilesDndElementProps) {
  const context = useContext(InputFilesContext);

  if (!context) {
    throw new Error(
      'InputFilesFile должен использоваться только внутри компонента InputFiles'
    );
  }

  const { draggedId } = context;

  const {
    attributes = {},
    listeners = {},
    setNodeRef,
    transform,
    transition,
  } = file
    ? useSortable({ id: file.id })
    : {
        attributes: {},
        listeners: {},
        setNodeRef: undefined,
        transform: undefined,
        transition: undefined,
      };

  const style = file
    ? ({
        '--translate-x': transform ? `${transform.x}px` : '0',
        '--translate-y': transform ? `${transform.y}px` : '0',
        '--scale': transform?.scaleX || 1,
        '--transition': transition || 'all 200ms ease-in-out',
      } as CSSProperties)
    : undefined;

  return (
    <div
      ref={setNodeRef ?? (props as any).ref}
      style={style}
      {...attributes}
      {...listeners}
      {...props}
      className={`mosuk-input-files-file ${styles.file} ${file?.id ? (draggedId === file.id ? styles.dragging : '') : ''} ${props.className ?? ''}`}
    >
      {props?.children}
    </div>
  );
}
