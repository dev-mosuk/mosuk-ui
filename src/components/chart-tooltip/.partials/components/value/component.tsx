import { ChartTooltipValueProps } from '@/components/chart-tooltip/.partials/components/value/component.interface';
import styles from '@/components/chart-tooltip/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function ChartTooltipValue({
  className,
  children,
  ...rest
}: ChartTooltipValueProps) {
  return (
    <span {...rest} className={classNames(styles.value, className)}>
      {children}
    </span>
  );
}
