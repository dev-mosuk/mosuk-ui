'use client';

import { ComposedChartTooltipContentProps } from '@/components/composed-chart/.partials/components/tooltip-content/component.interface';
import { ChartTooltip } from '@/components/chart-tooltip';
import React from 'react';

export function ComposedChartTooltipContent(props: ComposedChartTooltipContentProps) {
  return <ChartTooltip.Content {...props} />;
}
