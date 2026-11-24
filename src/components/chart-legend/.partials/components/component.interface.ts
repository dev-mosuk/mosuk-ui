import { ChartLegendIndicator } from '@/components/chart-legend/.partials/enums/component.enums';
import type { HTMLAttributes } from 'react';

export interface ChartLegendProps extends HTMLAttributes<HTMLDivElement> {
  indicator?: ChartLegendIndicator | `${ChartLegendIndicator}`;
}
