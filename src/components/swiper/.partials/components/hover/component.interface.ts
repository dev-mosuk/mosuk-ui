import type { HTMLAttributes } from 'react';

export type SwiperHoverProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
>;
