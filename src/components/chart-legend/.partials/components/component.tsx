'use client';

import { ChartLegendProps } from '@/components/chart-legend/.partials/components/component.interface';
import { CHART_LEGEND_DEFAULT_INDICATOR } from '@/components/chart-legend/.partials/constants/component.constants';
import { ChartLegendContext } from '@/components/chart-legend/.partials/providers/context/context';
import styles from '@/components/chart-legend/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { useMemo } from 'react';

export function ChartLegend({
  indicator = CHART_LEGEND_DEFAULT_INDICATOR,
  className,
  children,
  ...rest
}: ChartLegendProps) {
  const value = useMemo(() => ({ indicator }), [indicator]);

  return (
    <ChartLegendContext.Provider value={value}>
      <div
        {...rest}
        data-indicator={indicator}
        className={classNames(
          'mosuk-chart-legend',
          '@container/chart-legend',
          'group/chart-legend',
          styles.chartLegend,
          className,
        )}
      >
        {children}
      </div>
    </ChartLegendContext.Provider>
  );
}
