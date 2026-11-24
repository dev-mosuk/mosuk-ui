import { ChartTooltipContextValue } from '@/components/chart-tooltip/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const ChartTooltipContext = createContext<ChartTooltipContextValue>({
  indicator: 'dot',
});
