import type { HTMLAttributes, ReactNode } from 'react';

export interface PieChartProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: ReactNode;
}
