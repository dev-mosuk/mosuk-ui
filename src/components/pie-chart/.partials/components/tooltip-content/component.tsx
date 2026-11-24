'use client';

import { PieChartTooltipContentProps } from '@/components/pie-chart/.partials/components/tooltip-content/component.interface';
import { ChartTooltip } from '@/components/chart-tooltip';
import React from 'react';

export function PieChartTooltipContent(props: PieChartTooltipContentProps) {
  return <ChartTooltip.Content {...props} />;
}
