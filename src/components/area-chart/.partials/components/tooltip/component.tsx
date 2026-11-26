'use client';

import { AreaChartTooltipContent } from '@/components/area-chart/.partials/components/tooltip-content/component';
import { AreaChartTooltipProps } from '@/components/area-chart/.partials/components/tooltip/component.interface';
import React from 'react';
import { Tooltip } from 'recharts';

export function AreaChartTooltip({
  content = <AreaChartTooltipContent />,
  ...rest
}: AreaChartTooltipProps) {
  return <Tooltip content={content} {...rest} />;
}

AreaChartTooltip.displayName = 'Tooltip';
