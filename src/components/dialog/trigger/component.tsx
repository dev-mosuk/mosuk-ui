import { DialogTriggerProps } from '@/components/dialog/trigger/component.interface';
import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DialogTrigger({ ...rest }: DialogTriggerProps) {
  return (
    <BaseUIDialog.Trigger
      {...rest}
      className={classNames('mosuk-dialog-trigger', rest?.className)}
    >
      {rest?.children}
    </BaseUIDialog.Trigger>
  );
}
