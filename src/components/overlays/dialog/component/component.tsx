import { Dialog as BaseUIDialog } from '@base-ui/react';
import React from 'react';
import { DialogProps } from './component.interface';

export function Dialog({ ...rest }: DialogProps) {
  return <BaseUIDialog.Root {...rest}>{rest?.children}</BaseUIDialog.Root>;
}
