import { DropdownProps } from '@/components/dropdown/.partials/components/component.interface';
import { DropdownProvider } from '@/components/dropdown/.partials/providers/provider';
import { Popover } from '@base-ui/react/popover';
import React from 'react';

export function Dropdown({
  keepMounted,
  container,
  children,
  ...rest
}: DropdownProps) {
  return (
    <DropdownProvider keepMounted={keepMounted} container={container}>
      <Popover.Root {...rest}>{children}</Popover.Root>
    </DropdownProvider>
  );
}
