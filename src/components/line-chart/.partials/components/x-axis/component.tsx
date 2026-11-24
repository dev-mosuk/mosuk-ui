'use client';

import { LineChartXAxisProps } from '@/components/line-chart/.partials/components/x-axis/component.interface';
import { LINE_CHART_X_AXIS_DEFAULT_IS_HIDDEN } from '@/components/line-chart/.partials/constants/component.constants';
import React from 'react';
import { XAxis } from 'recharts';

export function LineChartXAxis({
  isHidden = LINE_CHART_X_AXIS_DEFAULT_IS_HIDDEN,
  hide: _hide,
  ...rest
}: LineChartXAxisProps) {
  return <XAxis hide={isHidden} {...rest} />;
}

LineChartXAxis.displayName = XAxis.displayName ?? 'XAxis';
LineChartXAxis.defaultProps = {
  ...XAxis.defaultProps,
};
