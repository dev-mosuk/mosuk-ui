'use client';

import { ComposedChartTooltipContent } from '@/components/composed-chart/.partials/components/tooltip-content/component';
import { ComposedChartTooltipProps } from '@/components/composed-chart/.partials/components/tooltip/component.interface';
import React from 'react';
import { Tooltip } from 'recharts';

export function ComposedChartTooltip({
  content = <ComposedChartTooltipContent />,
  ...rest
}: ComposedChartTooltipProps) {
  return <Tooltip content={content} {...rest} />;
}

ComposedChartTooltip.displayName = 'Tooltip';
