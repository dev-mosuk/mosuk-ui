'use client';

import { ComboboxProps } from '@/components/actions/combobox/component/.partials/components/component.interface';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import React from 'react';

export function Combobox<Value, Multiple extends boolean | undefined = false>({
  ...rest
}: ComboboxProps<Value, Multiple>) {
  return (
    <ComboboxPrimitive.Root {...rest}>{rest?.children}</ComboboxPrimitive.Root>
  );
}
