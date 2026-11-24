'use client';

import { BarChartTooltipContentProps } from '@/components/bar-chart/.partials/components/tooltip-content/component.interface';
import { ChartTooltip } from '@/components/chart-tooltip';
import React from 'react';

export function BarChartTooltipContent(props: BarChartTooltipContentProps) {
  return <ChartTooltip.Content {...props} />;
}
