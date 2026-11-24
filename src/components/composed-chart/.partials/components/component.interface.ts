import type { ComponentProps, HTMLAttributes, ReactNode } from 'react';
import type { ComposedChart as RechartsChart } from 'recharts';

type RechartsChartProps = ComponentProps<typeof RechartsChart>;

export interface ComposedChartProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  data?: RechartsChartProps['data'];
  margin?: RechartsChartProps['margin'];
  children?: ReactNode;
}
