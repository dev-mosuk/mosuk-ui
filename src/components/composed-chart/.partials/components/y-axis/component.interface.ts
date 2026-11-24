import type { ComponentProps } from 'react';
import type { YAxis } from 'recharts';

export type ComposedChartYAxisProps = Omit<
  ComponentProps<typeof YAxis>,
  'hide' | 'width'
> & {
  width?: number;
  isHidden?: boolean;
  /** @deprecated Use `isHidden` */
  hide?: never;
};
