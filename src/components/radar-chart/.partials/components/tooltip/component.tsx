'use client';

import { RadarChartTooltipContent } from '@/components/radar-chart/.partials/components/tooltip-content/component';
import { RadarChartTooltipProps } from '@/components/radar-chart/.partials/components/tooltip/component.interface';
import React from 'react';
import { Tooltip } from 'recharts';

export function RadarChartTooltip({
  content = <RadarChartTooltipContent />,
  ...rest
}: RadarChartTooltipProps) {
  return <Tooltip content={content} {...rest} />;
}

RadarChartTooltip.displayName = 'Tooltip';
