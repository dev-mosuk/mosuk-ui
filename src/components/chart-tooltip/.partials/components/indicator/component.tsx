import { ChartTooltipIndicatorProps } from '@/components/chart-tooltip/.partials/components/indicator/component.interface';
import { useChartTooltip } from '@/components/chart-tooltip/.partials/hooks/hook';
import styles from '@/components/chart-tooltip/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type CSSProperties } from 'react';

export function ChartTooltipIndicator({
  color,
  className,
  style,
  ...rest
}: ChartTooltipIndicatorProps) {
  const { indicator } = useChartTooltip();

  return (
    <span
      {...rest}
      data-shape={indicator}
      style={
        {
          ...(color ? { '--chart-tooltip-indicator': color } : undefined),
          ...style,
        } as CSSProperties
      }
      className={classNames(styles.indicator, className)}
    />
  );
}
