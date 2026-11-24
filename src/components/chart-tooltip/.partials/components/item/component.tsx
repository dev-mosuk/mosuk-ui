import { ChartTooltipItemProps } from '@/components/chart-tooltip/.partials/components/item/component.interface';
import styles from '@/components/chart-tooltip/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function ChartTooltipItem({
  className,
  children,
  ...rest
}: ChartTooltipItemProps) {
  return (
    <div {...rest} className={classNames(styles.item, className)}>
      {children}
    </div>
  );
}
