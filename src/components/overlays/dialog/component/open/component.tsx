import { DialogOpenProps } from '@/components/overlays/dialog/component/open/component.interface';
import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DialogOpen({ ...rest }: DialogOpenProps) {
  return (
    <BaseUIDialog.Trigger
      {...rest}
      className={classNames('mosuk-dialog-open', rest?.className)}
    >
      {rest?.children}
    </BaseUIDialog.Trigger>
  );
}
