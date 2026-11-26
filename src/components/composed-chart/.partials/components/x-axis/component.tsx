'use client';

import { ComposedChartXAxisProps } from '@/components/composed-chart/.partials/components/x-axis/component.interface';
import { COMPOSED_CHART_X_AXIS_DEFAULT_IS_HIDDEN } from '@/components/composed-chart/.partials/constants/component.constants';
import React from 'react';
import { XAxis } from 'recharts';

export function ComposedChartXAxis({
  isHidden = COMPOSED_CHART_X_AXIS_DEFAULT_IS_HIDDEN,
  hide: _hide,
  ...rest
}: ComposedChartXAxisProps) {
  return <XAxis hide={isHidden} {...rest} />;
}

ComposedChartXAxis.displayName = 'XAxis';
