import classNames from 'classnames';
import React from 'react';
import { DialogDialog } from '../../component/dialog/component';
import style from '../component.module.css';
import { DialogImagesDialogProps } from './component.interface';

export function DialogImagesDialog({ ...rest }: DialogImagesDialogProps) {
  return (
    <DialogDialog {...rest} className={classNames(style.dialog, rest?.className)}>
      {rest?.children}
    </DialogDialog>
  );
}
