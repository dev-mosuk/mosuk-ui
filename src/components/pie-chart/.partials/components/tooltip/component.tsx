'use client';

import { PieChartTooltipContent } from '@/components/pie-chart/.partials/components/tooltip-content/component';
import { PieChartTooltipProps } from '@/components/pie-chart/.partials/components/tooltip/component.interface';
import React from 'react';
import { Tooltip } from 'recharts';

export function PieChartTooltip({
  content = <PieChartTooltipContent />,
  ...rest
}: PieChartTooltipProps) {
  return <Tooltip content={content} {...rest} />;
}

PieChartTooltip.displayName = 'Tooltip';
