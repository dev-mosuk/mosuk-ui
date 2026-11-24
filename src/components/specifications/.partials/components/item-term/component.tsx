import type { SpecificationsItemTermProps } from '@/components/specifications/.partials/components/item-term/component.interface';
import styles from '@/components/specifications/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function SpecificationsItemTerm({
  className,
  ...rest
}: SpecificationsItemTermProps) {
  return (
    <dt
      {...rest}
      className={classNames(
        'mosuk-specifications-term',
        styles.term,
        className,
      )}
    />
  );
}
