import { PopoverProps } from '@/components/popover/.partials/components/component.interface';
import { PopoverProvider } from '@/components/popover/.partials/providers/provider';
import { Popover as BaseUIPopover } from '@base-ui/react/popover';
import React from 'react';

export function Popover({
  isOpen,
  defaultOpen,
  keepMounted,
  container,
  onOpenChange,
  onOpenChangeComplete,
  children,
  ...rest
}: PopoverProps) {
  return (
    <PopoverProvider keepMounted={keepMounted} container={container}>
      <BaseUIPopover.Root
        {...rest}
        open={isOpen}
        defaultOpen={defaultOpen}
        onOpenChange={(open) => onOpenChange?.(open)}
        onOpenChangeComplete={
          onOpenChangeComplete
            ? (open) => onOpenChangeComplete(open)
            : undefined
        }
      >
        {children}
      </BaseUIPopover.Root>
    </PopoverProvider>
  );
}
