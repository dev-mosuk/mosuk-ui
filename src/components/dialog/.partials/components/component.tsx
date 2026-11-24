import { DialogProps } from '@/components/dialog/.partials/components/component.interface';
import { DialogProvider } from '@/components/dialog/.partials/providers/provider';
import { Dialog as BaseUIDialog } from '@base-ui/react';
import React from 'react';

export function Dialog({
  isOpen,
  defaultOpen,
  keepMounted,
  container,
  children,
  ...rest
}: DialogProps) {
  return (
    <DialogProvider keepMounted={keepMounted} container={container}>
      <BaseUIDialog.Root {...rest} open={isOpen} defaultOpen={defaultOpen}>
        {children}
      </BaseUIDialog.Root>
    </DialogProvider>
  );
}
