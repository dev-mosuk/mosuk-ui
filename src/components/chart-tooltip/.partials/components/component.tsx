'use client';

import { ChartTooltipProps } from '@/components/chart-tooltip/.partials/components/component.interface';
import {
  CHART_TOOLTIP_DEFAULT_INDICATOR,
  CHART_TOOLTIP_DEFAULT_IS_ACTIVE,
} from '@/components/chart-tooltip/.partials/constants/component.constants';
import { ChartTooltipContext } from '@/components/chart-tooltip/.partials/providers/context/context';
import styles from '@/components/chart-tooltip/.partials/styles/component.module.css';
import { TOOLTIP_DEFAULT_VARIANT } from '@/components/tooltip/.partials/constants/component.constants';
import classNames from 'classnames';
import React, { useMemo } from 'react';

export function ChartTooltip({
  isActive = CHART_TOOLTIP_DEFAULT_IS_ACTIVE,
  indicator = CHART_TOOLTIP_DEFAULT_INDICATOR,
  variant = TOOLTIP_DEFAULT_VARIANT,
  className,
  children,
  ...rest
}: ChartTooltipProps) {
  const value = useMemo(() => ({ indicator }), [indicator]);

  if (!isActive) {
    return null;
  }

  return (
    <ChartTooltipContext.Provider value={value}>
      <div
        {...rest}
        data-indicator={indicator}
        data-variant={variant}
        className={classNames(
          'mosuk-chart-tooltip',
          'group/chart-tooltip',
          styles.chartTooltip,
          className,
        )}
      >
        {children}
      </div>
    </ChartTooltipContext.Provider>
  );
}
