import { ToastProps } from '@/components/toast/.partials/components/component.interface';
import { Toast as BaseUiToast } from '@base-ui/react/toast';
import React from 'react';

export function ToastRoot({ toast, ...rest }: ToastProps) {
  if (!toast) {
    return null;
  }

  return (
    <BaseUiToast.Root toast={toast} {...rest}>
      {rest?.children}
    </BaseUiToast.Root>
  );
}
