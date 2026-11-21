import { DialogProps } from '@/components/dialog/component.interface';
import { DialogProvider } from '@/components/dialog/.partials/providers/provider';
import { Dialog as BaseUIDialog } from '@base-ui/react';
import React from 'react';

export function Dialog({
  keepMounted,
  container,
  children,
  ...rest
}: DialogProps) {
  return (
    <DialogProvider keepMounted={keepMounted} container={container}>
      <BaseUIDialog.Root {...rest}>{children}</BaseUIDialog.Root>
    </DialogProvider>
  );
}
