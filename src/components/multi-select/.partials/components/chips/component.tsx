'use client';

import type { MultiSelectChipsProps } from '@/components/multi-select/.partials/components/chips/component.interface';
import { useMultiSelect } from '@/components/multi-select/.partials/hooks/hook';
import styles from '@/components/multi-select/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function MultiSelectChips({
  className,
  children,
  ...rest
}: MultiSelectChipsProps) {
  const { isDisabled } = useMultiSelect();

  return (
    <div
      {...rest}
      data-disabled={isDisabled || undefined}
      className={classNames(
        'mosuk-multi-select-chips',
        styles.chips,
        className,
      )}
    >
      {children}
    </div>
  );
}
