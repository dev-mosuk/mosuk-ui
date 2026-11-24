import type { ComponentProps, HTMLAttributes, ReactNode } from 'react';
import type { AreaChart as RechartsChart } from 'recharts';

type RechartsChartProps = ComponentProps<typeof RechartsChart>;

export interface AreaChartProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  data?: RechartsChartProps['data'];
  margin?: RechartsChartProps['margin'];
  children?: ReactNode;
}
