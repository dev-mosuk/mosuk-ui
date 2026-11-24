import { ChartLegendLabelProps } from '@/components/chart-legend/.partials/components/label/component.interface';
import styles from '@/components/chart-legend/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function ChartLegendLabel({
  className,
  children,
  ...rest
}: ChartLegendLabelProps) {
  return (
    <span {...rest} className={classNames(styles.label, className)}>
      {children}
    </span>
  );
}
