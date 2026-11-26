import type { SwiperOverflow } from '@/components/swiper/.partials/enums/component.enums';
import type { SwiperProps as BaseSwiperProps } from 'swiper/react';

export type SwiperProps = Omit<BaseSwiperProps, 'onSwiper'> & {
  overflow?: SwiperOverflow | `${SwiperOverflow}`;
  resetInactiveTimeout?: number;
  isResetInactive?: boolean;
  onSwiper?: BaseSwiperProps['onSwiper'];
};
