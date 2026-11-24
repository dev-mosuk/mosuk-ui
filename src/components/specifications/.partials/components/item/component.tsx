import type { SpecificationsItemProps } from '@/components/specifications/.partials/components/item/component.interface';
import styles from '@/components/specifications/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function SpecificationsItem({
  className,
  ...rest
}: SpecificationsItemProps) {
  return (
    <dl
      {...rest}
      className={classNames('mosuk-specifications-item', styles.item, className)}
    />
  );
}
