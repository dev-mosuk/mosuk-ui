import {
  SwiperOrientation,
  SwiperOverflow,
} from '@/components/swiper/.partials/enums/component.enums';

export const SWIPER_DEFAULT_MODULES = [] as const;
export const SWIPER_DEFAULT_OVERFLOW = SwiperOverflow.Hidden;
export const SWIPER_DEFAULT_IS_RESET_INACTIVE = false;
export const SWIPER_DEFAULT_RESET_INACTIVE_TIMEOUT = 200;
export const SWIPER_RESET_INTERSECTION_THRESHOLD = 0.5;
export const SWIPER_NAVIGATION_DEFAULT_ORIENTATION =
  SwiperOrientation.Horizontal;
export const SWIPER_NAVIGATION_DOT_DEFAULT_IS_ACTIVE = false;
