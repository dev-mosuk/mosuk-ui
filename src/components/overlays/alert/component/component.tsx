import { Toast } from '@base-ui-components/react/toast';
import React from 'react';
import { AlertProps } from './component.interface';

export function Alert({ toast, ...rest }: AlertProps) {
  if (!toast) {
    return null;
  }
 
  return (
    <Toast.Root toast={toast} {...rest}>
      {rest?.children}
    </Toast.Root>
  );
}
