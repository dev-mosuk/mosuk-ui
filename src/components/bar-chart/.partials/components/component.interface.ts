import type { ComponentProps, HTMLAttributes, ReactNode } from 'react';
import type { BarChart as RechartsBarChart } from 'recharts';

type RechartsBarChartProps = ComponentProps<typeof RechartsBarChart>;

export interface BarChartProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  data?: RechartsBarChartProps['data'];
  layout?: RechartsBarChartProps['layout'];
  margin?: RechartsBarChartProps['margin'];
  children?: ReactNode;
}
