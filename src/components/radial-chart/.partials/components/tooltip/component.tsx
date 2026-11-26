'use client';

import { RadialChartTooltipContent } from '@/components/radial-chart/.partials/components/tooltip-content/component';
import { RadialChartTooltipProps } from '@/components/radial-chart/.partials/components/tooltip/component.interface';
import React from 'react';
import { Tooltip } from 'recharts';

export function RadialChartTooltip({
  content = <RadialChartTooltipContent />,
  ...rest
}: RadialChartTooltipProps) {
  return <Tooltip content={content} {...rest} />;
}

RadialChartTooltip.displayName = 'Tooltip';
