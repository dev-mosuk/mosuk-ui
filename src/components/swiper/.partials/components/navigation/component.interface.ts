import type { HTMLAttributes } from 'react';

export type SwiperNavigationProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
>;
