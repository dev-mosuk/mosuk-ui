import type { ComponentProps, HTMLAttributes, ReactNode } from 'react';
import type { RadialBarChart as RechartsChart } from 'recharts';

type RechartsChartProps = ComponentProps<typeof RechartsChart>;

export interface RadialChartProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  data?: RechartsChartProps['data'];
  barSize?: RechartsChartProps['barSize'];
  innerRadius?: RechartsChartProps['innerRadius'];
  outerRadius?: RechartsChartProps['outerRadius'];
  startAngle?: RechartsChartProps['startAngle'];
  endAngle?: RechartsChartProps['endAngle'];
  children?: ReactNode;
}
