import { DialogCloseProps } from '@/components/overlays/dialog/component/close/component.interface';
import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DialogClose({ ...rest }: DialogCloseProps) {
  return (
    <BaseUIDialog.Close
      {...rest}
      className={classNames('mosuk-dialog-close', rest?.className)}
    >
      {rest?.children}
    </BaseUIDialog.Close>
  );
}
