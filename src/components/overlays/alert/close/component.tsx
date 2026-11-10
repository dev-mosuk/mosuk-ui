import { CloseProps } from '@/components/overlays/alert/close/component.interface';
import { Toast } from '@base-ui/react/toast';
import React from 'react';

export function Close({ ...rest }: CloseProps) {
  return <Toast.Close {...rest}>{rest?.children}</Toast.Close>;
}
