import type { SpecificationsProps } from '@/components/specifications/.partials/components/component.interface';
import styles from '@/components/specifications/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function Specifications({ className, ...rest }: SpecificationsProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-specifications',
        'group/specifications',
        styles.specifications,
        className,
      )}
    />
  );
}
