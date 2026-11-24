import { ChartTooltipHeaderProps } from '@/components/chart-tooltip/.partials/components/header/component.interface';
import styles from '@/components/chart-tooltip/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function ChartTooltipHeader({
  className,
  children,
  ...rest
}: ChartTooltipHeaderProps) {
  return (
    <div
      {...rest}
      className={classNames(styles.header, className)}
    >
      {children}
    </div>
  );
}
