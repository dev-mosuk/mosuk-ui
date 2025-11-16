import { useSortable } from '@dnd-kit/sortable';
import classNames from 'classnames';
import React, { CSSProperties, useContext } from 'react';
import { UploadFilesContext } from '../../component';
import styles from '../../component.module.css';
import { UploadFilesDndElementProps } from './component.interface';

export function UploadFilesDndElement({ file, ...rest }: UploadFilesDndElementProps) {
  const context = useContext(UploadFilesContext);

  if (!context) {
    throw new Error(
      'UploadFilesDndElement должен использоваться только внутри компонента UploadFiles'
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
      ref={setNodeRef ?? (rest as any).ref}
      {...attributes}
      {...listeners}
      {...rest}
      className={classNames('mosuk-upload-files-dnd-element', styles.element, {
        [styles.dragging]: draggedId === file.id
      }, rest.className)}
      style={style}
    >
      {rest?.children}
    </div>
  );
}
