'use client';

import { AreaChartYAxisProps } from '@/components/area-chart/.partials/components/y-axis/component.interface';
import {
  AREA_CHART_Y_AXIS_DEFAULT_IS_HIDDEN,
  AREA_CHART_Y_AXIS_DEFAULT_WIDTH,
} from '@/components/area-chart/.partials/constants/component.constants';
import React from 'react';
import { YAxis } from 'recharts';

export function AreaChartYAxis({
  width = AREA_CHART_Y_AXIS_DEFAULT_WIDTH,
  isHidden = AREA_CHART_Y_AXIS_DEFAULT_IS_HIDDEN,
  hide: _hide,
  ...rest
}: AreaChartYAxisProps) {
  return <YAxis width={width} hide={isHidden} {...rest} />;
}

AreaChartYAxis.displayName = 'YAxis';
