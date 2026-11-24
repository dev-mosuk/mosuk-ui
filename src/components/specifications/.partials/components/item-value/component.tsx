import type { SpecificationsItemValueProps } from '@/components/specifications/.partials/components/item-value/component.interface';
import styles from '@/components/specifications/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function SpecificationsItemValue({
  className,
  ...rest
}: SpecificationsItemValueProps) {
  return (
    <dd
      {...rest}
      className={classNames(
        'mosuk-specifications-value',
        styles.value,
        className,
      )}
    />
  );
}
