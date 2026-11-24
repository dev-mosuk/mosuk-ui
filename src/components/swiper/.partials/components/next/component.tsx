'use client';

import { SwiperNextProps } from '@/components/swiper/.partials/components/next/component.interface';
import styles from '@/components/swiper/.partials/styles/component.module.css';
import classNames from 'classnames';
import { ChevronRight } from 'lucide-react';
import React, {
  type ElementType,
  type MouseEvent,
  useEffect,
  useState,
} from 'react';
import { useSwiper } from 'swiper/react';

export function SwiperNext<C extends ElementType = 'button'>({
  as,
  ref,
  isDisabled,
  className,
  children,
  onClick,
  ...rest
}: SwiperNextProps<C>) {
  const swiper = useSwiper();
  const [isLocked, setIsLocked] = useState(() => swiper.isEnd);
  const Component = (as ?? 'button') as ElementType;
  const isNativeButton = !as || as === 'button';
  const locked = Boolean(isDisabled || isLocked);

  useEffect(() => {
    const sync = () => setIsLocked(swiper.isEnd);

    sync();
    swiper.on('slideChange', sync);
    swiper.on('reachEnd', sync);
    swiper.on('fromEdge', sync);
    swiper.on('lock', sync);
    swiper.on('unlock', sync);

    return () => {
      swiper.off('slideChange', sync);
      swiper.off('reachEnd', sync);
      swiper.off('fromEdge', sync);
      swiper.off('lock', sync);
      swiper.off('unlock', sync);
    };
  }, [swiper]);

  return (
    <Component
      {...rest}
      ref={ref}
      type={isNativeButton ? 'button' : rest.type}
      disabled={locked}
      data-disabled={locked || undefined}
      data-locked={isLocked || undefined}
      aria-disabled={locked || undefined}
      className={classNames('mosuk-swiper-next', styles.next, className)}
      onClick={(event: MouseEvent<HTMLElement>) => {
        onClick?.(event);
        if (event.defaultPrevented || locked) {
          return;
        }

        swiper.slideNext();
      }}
    >
      {children ?? <ChevronRight aria-hidden strokeWidth={1.5} />}
    </Component>
  );
}
