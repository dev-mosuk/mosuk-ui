import { DropdownDropdownProps } from '@/components/overlays/dropdown/component/.partials/components/dropdown/component.interface';
import { Popover } from '@base-ui/react/popover';
import React from 'react';

export function DropdownDropdown({
  container,
  ...rest
}: DropdownDropdownProps) {
  return (
    <Popover.Portal container={container ?? undefined}>
      <Popover.Positioner {...rest}>{rest?.children}</Popover.Positioner>
    </Popover.Portal>
  );
}
