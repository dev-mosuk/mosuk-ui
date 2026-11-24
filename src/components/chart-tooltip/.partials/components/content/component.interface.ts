import { ChartTooltipIndicator } from '@/components/chart-tooltip/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';
import type { NameType, Payload, ValueType } from 'recharts/types/component/DefaultTooltipContent';

export interface ChartTooltipContentProps {
  active?: boolean;
  payload?: Array<Payload<ValueType, NameType>>;
  label?: string | number;
  isHeaderHidden?: boolean;
  indicator?: ChartTooltipIndicator;
  labelFormatter?: (label: string | number) => ReactNode;
  valueFormatter?: (value: string | number) => ReactNode;
}
