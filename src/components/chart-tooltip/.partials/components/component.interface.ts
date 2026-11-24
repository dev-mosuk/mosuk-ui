import { ChartTooltipIndicator } from '@/components/chart-tooltip/.partials/providers/context/context.interface';
import { TooltipVariant } from '@/components/tooltip/.partials/enums/component.enums';
import type { HTMLAttributes } from 'react';

export interface ChartTooltipProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  indicator?: ChartTooltipIndicator;
  variant?: TooltipVariant | `${TooltipVariant}`;
}
