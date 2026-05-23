'use client';

import { ComboboxCollectionProps } from '@/components/actions/combobox/component/.partials/components/collection/component.interface';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import React from 'react';

export function ComboboxCollection({ ...rest }: ComboboxCollectionProps) {
  return <ComboboxPrimitive.Collection {...rest} />;
}
