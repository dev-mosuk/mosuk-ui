'use client';

import { AreaChartXAxisProps } from '@/components/area-chart/.partials/components/x-axis/component.interface';
import { AREA_CHART_X_AXIS_DEFAULT_IS_HIDDEN } from '@/components/area-chart/.partials/constants/component.constants';
import React from 'react';
import { XAxis } from 'recharts';

export function AreaChartXAxis({
  isHidden = AREA_CHART_X_AXIS_DEFAULT_IS_HIDDEN,
  hide: _hide,
  ...rest
}: AreaChartXAxisProps) {
  return <XAxis hide={isHidden} {...rest} />;
}

AreaChartXAxis.displayName = XAxis.displayName ?? 'XAxis';
AreaChartXAxis.defaultProps = {
  ...XAxis.defaultProps,
};
