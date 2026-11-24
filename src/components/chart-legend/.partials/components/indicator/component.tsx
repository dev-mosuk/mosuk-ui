import { ChartLegendIndicatorProps } from '@/components/chart-legend/.partials/components/indicator/component.interface';
import { CHART_LEGEND_DEFAULT_TONE } from '@/components/chart-legend/.partials/constants/component.constants';
import { useChartLegend } from '@/components/chart-legend/.partials/hooks/hook';
import styles from '@/components/chart-legend/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function ChartLegendIndicator({
  tone = CHART_LEGEND_DEFAULT_TONE,
  className,
  ...rest
}: ChartLegendIndicatorProps) {
  const { indicator } = useChartLegend();

  return (
    <span
      {...rest}
      data-shape={indicator}
      data-tone={tone}
      className={classNames(styles.indicator, className)}
    />
  );
}
