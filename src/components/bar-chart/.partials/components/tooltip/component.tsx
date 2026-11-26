'use client';

import { BarChartTooltipContent } from '@/components/bar-chart/.partials/components/tooltip-content/component';
import { BarChartTooltipProps } from '@/components/bar-chart/.partials/components/tooltip/component.interface';
import React from 'react';
import { Tooltip } from 'recharts';

export function BarChartTooltip({
  cursor = { fill: 'var(--bar-chart-cursor)' },
  content = <BarChartTooltipContent />,
  ...rest
}: BarChartTooltipProps) {
  return <Tooltip cursor={cursor} content={content} {...rest} />;
}

BarChartTooltip.displayName = 'Tooltip';
