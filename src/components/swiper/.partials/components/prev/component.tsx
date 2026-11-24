'use client';

import { SwiperPrevProps } from '@/components/swiper/.partials/components/prev/component.interface';
import styles from '@/components/swiper/.partials/styles/component.module.css';
import classNames from 'classnames';
import { ChevronLeft } from 'lucide-react';
import React, {
  type ElementType,
  type MouseEvent,
  useEffect,
  useState,
} from 'react';
import { useSwiper } from 'swiper/react';

export function SwiperPrev<C extends ElementType = 'button'>({
  as,
  ref,
  isDisabled,
  className,
  children,
  onClick,
  ...rest
}: SwiperPrevProps<C>) {
  const swiper = useSwiper();
  const [isLocked, setIsLocked] = useState(() => swiper.isBeginning);
  const Component = (as ?? 'button') as ElementType;
  const isNativeButton = !as || as === 'button';
  const locked = Boolean(isDisabled || isLocked);

  useEffect(() => {
    const sync = () => setIsLocked(swiper.isBeginning);

    sync();
    swiper.on('slideChange', sync);
    swiper.on('reachBeginning', sync);
    swiper.on('fromEdge', sync);
    swiper.on('lock', sync);
    swiper.on('unlock', sync);

    return () => {
      swiper.off('slideChange', sync);
      swiper.off('reachBeginning', sync);
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
      className={classNames('mosuk-swiper-prev', styles.prev, className)}
      onClick={(event: MouseEvent<HTMLElement>) => {
        onClick?.(event);
        if (event.defaultPrevented || locked) {
          return;
        }

        swiper.slidePrev();
      }}
    >
      {children ?? <ChevronLeft aria-hidden strokeWidth={1.5} />}
    </Component>
  );
}
