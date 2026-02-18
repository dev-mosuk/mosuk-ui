import { Dialog as BaseUiDialog } from '@base-ui/react/dialog';
import classNames from 'classnames';
import React, { useContext } from 'react';
import styles from '../component.module.css';
import { DialogContext } from '../context/component';
import { DialogContextProps } from '../context/component.interface';
import { DialogBackdropProps } from './component.interface';

export function DialogBackdrop({ ...rest }: DialogBackdropProps) {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('Dialog.Backdrop must be used within a Dialog.Context');
  }

  const { styleVars, isDragging } = context as DialogContextProps;

  return (
    <BaseUiDialog.Backdrop
      {...rest}
      style={{
        ...rest?.style,
        ...styleVars,
      }}
      className={classNames(
        'mosuk-dialog-backdrop',
        styles.backdrop,
        {
          [styles.dragging]: isDragging,
        },
        rest?.className
      )}
    />
  );
}
