import { AlertProps } from '@/components/overlays/alert/component/component.interface';
import { Toast } from '@base-ui/react/toast';
import React from 'react';

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
