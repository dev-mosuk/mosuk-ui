import { DropdownProps } from '@/components/overlays/dropdown/component/.partials/components/component.interface';
import { Popover } from '@base-ui/react/popover';
import React from 'react';

export function Dropdown({ ...rest }: DropdownProps) {
  return <Popover.Root {...rest}>{rest?.children}</Popover.Root>;
}
