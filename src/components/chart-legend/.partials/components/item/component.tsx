import { ChartLegendItemProps } from '@/components/chart-legend/.partials/components/item/component.interface';
import styles from '@/components/chart-legend/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function ChartLegendItem({
  className,
  children,
  ...rest
}: ChartLegendItemProps) {
  return (
    <div {...rest} className={classNames(styles.item, className)}>
      {children}
    </div>
  );
}
