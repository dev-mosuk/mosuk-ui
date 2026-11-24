'use client';

import { LineChartTooltipContentProps } from '@/components/line-chart/.partials/components/tooltip-content/component.interface';
import { ChartTooltip } from '@/components/chart-tooltip';
import React from 'react';

export function LineChartTooltipContent(props: LineChartTooltipContentProps) {
  return <ChartTooltip.Content {...props} />;
}
