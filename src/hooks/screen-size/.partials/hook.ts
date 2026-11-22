import {
  SCREEN_SIZE_MIN_WIDTH,
  SCREEN_SIZE_ORDER,
} from '@/hooks/screen-size/.partials/hook.constants';
import { ScreenSize } from '@/hooks/screen-size/.partials/hook.enums';
import type { UseScreenSizeProps } from '@/hooks/screen-size/.partials/hook.interface';
import { useEffect, useState } from 'react';

function resolveSize(width: number): ScreenSize {
  let result = ScreenSize.TwoXs;

  for (const size of SCREEN_SIZE_ORDER) {
    if (width >= SCREEN_SIZE_MIN_WIDTH[size]) {
      result = size;
    }
  }

  return result;
}

function getSize(): ScreenSize {
  if (typeof window === 'undefined') {
    return ScreenSize.TwoXs;
  }

  return resolveSize(window.innerWidth);
}

export function useScreenSize(): UseScreenSizeProps {
  const [size, setSize] = useState<ScreenSize>(ScreenSize.TwoXs);

  useEffect(() => {
    const update = () => {
      setSize(getSize());
    };

    update();

    const medias = SCREEN_SIZE_ORDER.filter(
      (breakpoint) => SCREEN_SIZE_MIN_WIDTH[breakpoint] > 0,
    ).map((breakpoint) =>
      window.matchMedia(`(min-width: ${SCREEN_SIZE_MIN_WIDTH[breakpoint]}px)`),
    );

    for (const media of medias) {
      media.addEventListener('change', update);
    }

    return () => {
      for (const media of medias) {
        media.removeEventListener('change', update);
      }
    };
  }, []);

  const sizeIndex = SCREEN_SIZE_ORDER.indexOf(size);
  const smIndex = SCREEN_SIZE_ORDER.indexOf(ScreenSize.Sm);
  const lgIndex = SCREEN_SIZE_ORDER.indexOf(ScreenSize.Lg);

  return {
    size,
    isMobile: sizeIndex < smIndex,
    isTablet: sizeIndex >= smIndex && sizeIndex < lgIndex,
    isDesktop: sizeIndex >= lgIndex,
  };
}
