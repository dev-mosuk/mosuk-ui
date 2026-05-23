'use client';

import { ComboboxValueProps } from '@/components/actions/combobox/component/.partials/components/value/component.interface';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import React from 'react';

export function ComboboxValue({ ...rest }: ComboboxValueProps) {
  return <ComboboxPrimitive.Value {...rest} />;
}
