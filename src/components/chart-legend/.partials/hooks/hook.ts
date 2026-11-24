import { ChartLegendContext } from '@/components/chart-legend/.partials/providers/context/context';
import { useContext } from 'react';

export function useChartLegend() {
  return useContext(ChartLegendContext);
}
