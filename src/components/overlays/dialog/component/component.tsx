import { DialogProps } from '@/components/overlays/dialog/component/component.interface';
import { Dialog as BaseUIDialog } from '@base-ui/react';
import React from 'react';

export function Dialog({ ...rest }: DialogProps) {
  return <BaseUIDialog.Root {...rest}>{rest?.children}</BaseUIDialog.Root>;
}
