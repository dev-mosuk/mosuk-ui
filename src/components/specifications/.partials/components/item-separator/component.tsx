import type { SpecificationsItemSeparatorProps } from '@/components/specifications/.partials/components/item-separator/component.interface';
import styles from '@/components/specifications/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function SpecificationsItemSeparator({
  className,
  ...rest
}: SpecificationsItemSeparatorProps) {
  return (
    <span
      {...rest}
      aria-hidden
      className={classNames(
        'mosuk-specifications-separator',
        styles.separator,
        className,
      )}
    />
  );
}
