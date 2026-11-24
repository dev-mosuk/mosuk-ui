import { CHART_LEGEND_DEFAULT_INDICATOR } from '@/components/chart-legend/.partials/constants/component.constants';
import { ChartLegendContextValue } from '@/components/chart-legend/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const ChartLegendContext = createContext<ChartLegendContextValue>({
  indicator: CHART_LEGEND_DEFAULT_INDICATOR,
});
