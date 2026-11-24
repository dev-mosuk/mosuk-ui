import { ChartTooltipContext } from '@/components/chart-tooltip/.partials/providers/context/context';
import { useContext } from 'react';

export function useChartTooltip() {
  return useContext(ChartTooltipContext);
}
