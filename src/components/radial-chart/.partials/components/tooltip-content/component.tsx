'use client';

import { RadialChartTooltipContentProps } from '@/components/radial-chart/.partials/components/tooltip-content/component.interface';
import { ChartTooltip } from '@/components/chart-tooltip';
import React from 'react';

export function RadialChartTooltipContent(props: RadialChartTooltipContentProps) {
  return <ChartTooltip.Content {...props} />;
}
