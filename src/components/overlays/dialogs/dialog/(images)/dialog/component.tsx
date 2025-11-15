import React from 'react';
import { Dialog as BaseDialog } from '../../../dialog/component/component';
import { DialogProps } from './component.interface';

export function Dialog({ ...rest }: DialogProps) {
  return (
    <BaseDialog {...rest}>
      {rest?.children}
    </BaseDialog>
  );
}
