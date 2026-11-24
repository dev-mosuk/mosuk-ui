import type { ComponentProps } from 'react';
import type { XAxis } from 'recharts';

export type LineChartXAxisProps = Omit<ComponentProps<typeof XAxis>, 'hide'> & {
  isHidden?: boolean;
  /** @deprecated Use `isHidden` */
  hide?: never;
};
