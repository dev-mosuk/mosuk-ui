'use client';

import { ComboboxPortalPositionerPopupListCollectionProps } from '@/components/actions/combobox/component/.partials/components/portal/positioner/popup/list/collection/component.interface';
import { Combobox } from '@base-ui/react/combobox';
import React from 'react';

export function ComboboxPortalPositionerPopupListCollection({
  ...rest
}: ComboboxPortalPositionerPopupListCollectionProps) {
  return <Combobox.Collection {...rest} />;
}
