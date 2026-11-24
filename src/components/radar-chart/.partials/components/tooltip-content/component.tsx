'use client';

import { RadarChartTooltipContentProps } from '@/components/radar-chart/.partials/components/tooltip-content/component.interface';
import { ChartTooltip } from '@/components/chart-tooltip';
import React from 'react';

export function RadarChartTooltipContent(props: RadarChartTooltipContentProps) {
  return <ChartTooltip.Content {...props} />;
}
