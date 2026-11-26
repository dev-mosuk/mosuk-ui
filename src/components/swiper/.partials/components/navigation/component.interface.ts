import type { SwiperOrientation } from '@/components/swiper/.partials/enums/component.enums';
import type { HTMLAttributes } from 'react';

export type SwiperNavigationProps = {
  orientation?: SwiperOrientation | `${SwiperOrientation}`;
} & HTMLAttributes<HTMLDivElement>;
