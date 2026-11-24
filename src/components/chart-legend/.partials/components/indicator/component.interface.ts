import { ChartLegendTone } from '@/components/chart-legend/.partials/enums/component.enums';
import type { HTMLAttributes } from 'react';

export interface ChartLegendIndicatorProps
  extends HTMLAttributes<HTMLSpanElement> {
  tone?: ChartLegendTone | `${ChartLegendTone}`;
}
