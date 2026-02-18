import { Toast } from '@base-ui/react/toast';
import React from 'react';
import { CloseProps } from './component.interface';

export function Close({ ...rest }: CloseProps) {
  return (
    <Toast.Close {...rest}>
      {rest?.children}
    </Toast.Close>
  );
}
