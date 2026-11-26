'use client';

import { LineChartTooltipContent } from '@/components/line-chart/.partials/components/tooltip-content/component';
import { LineChartTooltipProps } from '@/components/line-chart/.partials/components/tooltip/component.interface';
import React from 'react';
import { Tooltip } from 'recharts';

export function LineChartTooltip({
  content = <LineChartTooltipContent />,
  ...rest
}: LineChartTooltipProps) {
  return <Tooltip content={content} {...rest} />;
}

LineChartTooltip.displayName = 'Tooltip';
