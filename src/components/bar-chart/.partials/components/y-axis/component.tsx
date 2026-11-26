'use client';

import { BarChartYAxisProps } from '@/components/bar-chart/.partials/components/y-axis/component.interface';
import {
  BAR_CHART_Y_AXIS_DEFAULT_IS_HIDDEN,
  BAR_CHART_Y_AXIS_DEFAULT_WIDTH,
} from '@/components/bar-chart/.partials/constants/component.constants';
import React from 'react';
import { YAxis } from 'recharts';

export function BarChartYAxis({
  width = BAR_CHART_Y_AXIS_DEFAULT_WIDTH,
  isHidden = BAR_CHART_Y_AXIS_DEFAULT_IS_HIDDEN,
  hide: _hide,
  ...rest
}: BarChartYAxisProps) {
  return <YAxis width={width} hide={isHidden} {...rest} />;
}

BarChartYAxis.displayName = 'YAxis';
