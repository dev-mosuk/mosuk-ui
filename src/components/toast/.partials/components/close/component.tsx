import { CloseProps } from '@/components/toast/.partials/components/close/component.interface';
import { Toast as BaseUiToast } from '@base-ui/react/toast';
import React from 'react';

export function Close({ ...rest }: CloseProps) {
  return <BaseUiToast.Close {...rest}>{rest?.children}</BaseUiToast.Close>;
}
