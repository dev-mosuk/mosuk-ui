import { Swiper as Component } from '@/components/swiper/.partials/components/component';
import { SwiperProps as ComponentProps } from '@/components/swiper/.partials/components/component.interface';
import { SwiperHover } from '@/components/swiper/.partials/components/hover/component';
import { SwiperHoverProps } from '@/components/swiper/.partials/components/hover/component.interface';
import { SwiperNavigation } from '@/components/swiper/.partials/components/navigation/component';
import { SwiperNavigationProps } from '@/components/swiper/.partials/components/navigation/component.interface';
import { SwiperNavigationDot } from '@/components/swiper/.partials/components/navigation-dot/component';
import { SwiperNavigationDotProps } from '@/components/swiper/.partials/components/navigation-dot/component.interface';
import { SwiperNext } from '@/components/swiper/.partials/components/next/component';
import { SwiperNextProps } from '@/components/swiper/.partials/components/next/component.interface';
import { SwiperPrev } from '@/components/swiper/.partials/components/prev/component';
import { SwiperPrevProps } from '@/components/swiper/.partials/components/prev/component.interface';
import { SwiperSlide } from '@/components/swiper/.partials/components/slide/component';
import { SwiperSlideProps } from '@/components/swiper/.partials/components/slide/component.interface';
import { SwiperOverflow } from '@/components/swiper/.partials/enums/component.enums';
import type { ElementType } from 'react';

export { useSwiper, useSwiperSlide } from 'swiper/react';

export const Swiper = Object.assign(Component, {
  ENUMS: {
    Overflow: SwiperOverflow,
  },
  Slide: SwiperSlide,
  Hover: SwiperHover,
  Navigation: Object.assign(SwiperNavigation, {
    Dot: SwiperNavigationDot,
  }),
  Next: SwiperNext,
  Prev: SwiperPrev,
});

export namespace Swiper {
  export type Props = ComponentProps;

  export namespace Slide {
    export type Props = SwiperSlideProps;
  }

  export namespace Hover {
    export type Props = SwiperHoverProps;
  }

  export namespace Navigation {
    export type Props = SwiperNavigationProps;

    export namespace Dot {
      export type Props<C extends ElementType = 'button'> =
        SwiperNavigationDotProps<C>;
    }
  }

  export namespace Next {
    export type Props<C extends ElementType = 'button'> = SwiperNextProps<C>;
  }

  export namespace Prev {
    export type Props<C extends ElementType = 'button'> = SwiperPrevProps<C>;
  }
}
