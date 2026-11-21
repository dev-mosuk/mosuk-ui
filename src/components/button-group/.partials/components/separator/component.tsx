import type { ButtonGroupSeparatorProps } from '@/components/button-group/.partials/components/separator/component.interface';
import styles from '@/components/button-group/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function ButtonGroupSeparator({
  className,
  ...rest
}: ButtonGroupSeparatorProps) {
  return (
    <span
      {...rest}
      aria-hidden='true'
      className={classNames(
        'mosuk-button-group-separator',
        styles.separator,
        className,
      )}
    />
  );
}
