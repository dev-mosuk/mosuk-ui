'use client';

import { SelectTriggerProps } from '@/components/select/.partials/components/trigger/component.interface';
import { useSelect } from '@/components/select/.partials/hooks/hook';
import styles from '@/components/select/.partials/styles/component.module.css';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import classNames from 'classnames';
import React from 'react';

export function SelectTrigger({ ...rest }: SelectTriggerProps) {
  const { clear, isEmpty, clearMounted } = useSelect();

  return (
    <SelectPrimitive.Trigger
      {...rest}
      className={classNames(
        'mosuk-select-trigger',
        '@container/select',
        'group/select',
        styles.trigger,
        rest?.className,
      )}
      onKeyDown={(event) => {
        rest?.onKeyDown?.(event);

        if (event.defaultPrevented || !clearMounted.current || isEmpty) {
          return;
        }

        if (event.key !== 'Backspace' && event.key !== 'Delete') {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        clear();
      }}
    >
      {rest?.children}
    </SelectPrimitive.Trigger>
  );
}
