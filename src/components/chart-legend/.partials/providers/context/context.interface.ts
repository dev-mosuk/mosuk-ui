import { ChartLegendIndicator } from '@/components/chart-legend/.partials/enums/component.enums';

export interface ChartLegendContextValue {
  indicator: ChartLegendIndicator | `${ChartLegendIndicator}`;
}
