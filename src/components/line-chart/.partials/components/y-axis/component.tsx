'use client';

import { LineChartYAxisProps } from '@/components/line-chart/.partials/components/y-axis/component.interface';
import {
  LINE_CHART_Y_AXIS_DEFAULT_IS_HIDDEN,
  LINE_CHART_Y_AXIS_DEFAULT_WIDTH,
} from '@/components/line-chart/.partials/constants/component.constants';
import React from 'react';
import { YAxis } from 'recharts';

export function LineChartYAxis({
  width = LINE_CHART_Y_AXIS_DEFAULT_WIDTH,
  isHidden = LINE_CHART_Y_AXIS_DEFAULT_IS_HIDDEN,
  hide: _hide,
  ...rest
}: LineChartYAxisProps) {
  return <YAxis width={width} hide={isHidden} {...rest} />;
}

LineChartYAxis.displayName = YAxis.displayName ?? 'YAxis';
LineChartYAxis.defaultProps = {
  ...YAxis.defaultProps,
  width: LINE_CHART_Y_AXIS_DEFAULT_WIDTH,
};
