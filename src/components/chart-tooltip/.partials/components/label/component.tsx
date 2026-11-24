import { ChartTooltipLabelProps } from '@/components/chart-tooltip/.partials/components/label/component.interface';
import styles from '@/components/chart-tooltip/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function ChartTooltipLabel({
  className,
  children,
  ...rest
}: ChartTooltipLabelProps) {
  return (
    <span {...rest} className={classNames(styles.label, className)}>
      {children}
    </span>
  );
}
