import { SWIPER_RESET_INTERSECTION_THRESHOLD } from '@/components/swiper/.partials/constants/component.constants';
import type { UseSwiperResetInactiveProps } from '@/components/swiper/.partials/hooks/hook.interface';
import { useEffect } from 'react';
import type { Swiper as SwiperClass } from 'swiper';

function slideToFirst(swiper: SwiperClass) {
  if (swiper.params.loop) {
    swiper.slideToLoop(0);
    return;
  }

  swiper.slideTo(0);
}

export function useSwiperResetInactive({
  swiper,
  isEnabled,
  timeout,
}: UseSwiperResetInactiveProps) {
  useEffect(() => {
    if (!isEnabled || !swiper) {
      return;
    }

    const element = swiper.el;

    if (!element) {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const scheduleReset = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => slideToFirst(swiper), timeout);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          scheduleReset();
        }
      },
      {
        threshold: SWIPER_RESET_INTERSECTION_THRESHOLD,
      },
    );

    observer.observe(element);

    const onFocusOut = (event: FocusEvent) => {
      const next = event.relatedTarget;

      if (next instanceof Node && element.contains(next)) {
        return;
      }

      scheduleReset();
    };

    element.addEventListener('focusout', onFocusOut);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      element.removeEventListener('focusout', onFocusOut);
    };
  }, [swiper, isEnabled, timeout]);
}
