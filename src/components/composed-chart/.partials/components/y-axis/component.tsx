'use client';

import { ComposedChartYAxisProps } from '@/components/composed-chart/.partials/components/y-axis/component.interface';
import {
  COMPOSED_CHART_Y_AXIS_DEFAULT_IS_HIDDEN,
  COMPOSED_CHART_Y_AXIS_DEFAULT_WIDTH,
} from '@/components/composed-chart/.partials/constants/component.constants';
import React from 'react';
import { YAxis } from 'recharts';

export function ComposedChartYAxis({
  width = COMPOSED_CHART_Y_AXIS_DEFAULT_WIDTH,
  isHidden = COMPOSED_CHART_Y_AXIS_DEFAULT_IS_HIDDEN,
  hide: _hide,
  ...rest
}: ComposedChartYAxisProps) {
  return <YAxis width={width} hide={isHidden} {...rest} />;
}

ComposedChartYAxis.displayName = 'YAxis';
