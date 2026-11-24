'use client';

import { ContextMenuProps } from '@/components/context-menu/.partials/components/component.interface';
import { ContextMenuProvider } from '@/components/context-menu/.partials/providers/provider';
import { ContextMenu as BaseUIContextMenu } from '@base-ui/react/context-menu';
import React from 'react';

export function ContextMenu({
  isOpen,
  defaultOpen,
  isDisabled,
  keepMounted,
  container,
  onOpenChange,
  onOpenChangeComplete,
  children,
  ...rest
}: ContextMenuProps) {
  return (
    <ContextMenuProvider keepMounted={keepMounted} container={container}>
      <BaseUIContextMenu.Root
        {...rest}
        open={isOpen}
        defaultOpen={defaultOpen}
        disabled={isDisabled}
        onOpenChange={(open) => onOpenChange?.(open)}
        onOpenChangeComplete={
          onOpenChangeComplete
            ? (open) => onOpenChangeComplete(open)
            : undefined
        }
      >
        {children}
      </BaseUIContextMenu.Root>
    </ContextMenuProvider>
  );
}
