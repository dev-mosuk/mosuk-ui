import { DropdownProps } from '@/components/dropdown/.partials/components/component.interface';
import { DropdownProvider } from '@/components/dropdown/.partials/providers/provider';
import { Popover } from '@base-ui/react/popover';
import React from 'react';

export function Dropdown({
  isOpen,
  keepMounted,
  container,
  onOpenChange,
  onOpenChangeComplete,
  children,
  ...rest
}: DropdownProps) {
  return (
    <DropdownProvider keepMounted={keepMounted} container={container}>
      <Popover.Root
        {...rest}
        open={isOpen}
        onOpenChange={(open) => onOpenChange?.(open)}
        onOpenChangeComplete={
          onOpenChangeComplete
            ? (open) => onOpenChangeComplete(open)
            : undefined
        }
      >
        {children}
      </Popover.Root>
    </DropdownProvider>
  );
}
