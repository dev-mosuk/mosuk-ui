import { DropdownTriggerProps } from '@/components/overlays/dropdown/component/.partials/components/trigger/component.interface';
import styles from '@/components/overlays/dropdown/component/.partials/styles/component.module.css';
import { Popover } from '@base-ui/react/popover';
import classNames from 'classnames';
import React from 'react';

export function DropdownTrigger({ ...rest }: DropdownTriggerProps) {
  return (
    <Popover.Trigger
      {...rest}
      className={classNames(
        'mosuk-dropdown-trigger',
        styles.trigger,
        rest?.className,
      )}
    >
      {rest?.children}
    </Popover.Trigger>
  );
}
