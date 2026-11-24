import type { ComponentProps } from 'react';
import type { XAxis } from 'recharts';

export type AreaChartXAxisProps = Omit<ComponentProps<typeof XAxis>, 'hide'> & {
  isHidden?: boolean;
  /** @deprecated Use `isHidden` */
  hide?: never;
};
