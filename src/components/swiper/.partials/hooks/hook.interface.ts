import type { Swiper as SwiperClass } from 'swiper';

export type UseSwiperResetInactiveProps = {
  swiper: SwiperClass | null;
  isEnabled: boolean;
  timeout: number;
};
