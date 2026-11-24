'use client';

import { BarChartXAxisProps } from '@/components/bar-chart/.partials/components/x-axis/component.interface';
import { BAR_CHART_X_AXIS_DEFAULT_IS_HIDDEN } from '@/components/bar-chart/.partials/constants/component.constants';
import React from 'react';
import { XAxis } from 'recharts';

export function BarChartXAxis({
  isHidden = BAR_CHART_X_AXIS_DEFAULT_IS_HIDDEN,
  hide: _hide,
  ...rest
}: BarChartXAxisProps) {
  return <XAxis hide={isHidden} {...rest} />;
}

BarChartXAxis.displayName = XAxis.displayName ?? 'XAxis';
BarChartXAxis.defaultProps = {
  ...XAxis.defaultProps,
};
