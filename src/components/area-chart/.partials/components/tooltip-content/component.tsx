'use client';

import { AreaChartTooltipContentProps } from '@/components/area-chart/.partials/components/tooltip-content/component.interface';
import { ChartTooltip } from '@/components/chart-tooltip';
import React from 'react';

export function AreaChartTooltipContent(props: AreaChartTooltipContentProps) {
  return <ChartTooltip.Content {...props} />;
}
