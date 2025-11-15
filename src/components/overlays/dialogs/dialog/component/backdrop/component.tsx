import { Dialog as BaseUiDialog } from '@base-ui-components/react/dialog';
import classNames from 'classnames';
import React, { useContext } from 'react';
import styles from '../component.module.css';
import { Context } from '../context/component';
import { BackdropProps } from './component.interface';
 
export function Backdrop({ ...rest }: BackdropProps) {
  const context = useContext(Context);

  if (!context) {
    throw new Error('Dialog.Backdrop must be used within a Dialog');
  }

  const { styleVars, isDragging } = context;

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
