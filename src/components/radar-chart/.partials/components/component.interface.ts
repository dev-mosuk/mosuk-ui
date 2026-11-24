import type { ComponentProps, HTMLAttributes, ReactNode } from 'react';
import type { RadarChart as RechartsChart } from 'recharts';

type RechartsChartProps = ComponentProps<typeof RechartsChart>;

export interface RadarChartProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  data?: RechartsChartProps['data'];
  children?: ReactNode;
}
