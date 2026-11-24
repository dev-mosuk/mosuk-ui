import type { Swiper } from '@/components/swiper';
import type { TabsContentVariant } from '@/components/tabs/.partials/enums/component.enums';
import { ComponentPropsWithoutRef } from 'react';

export type TabsContentProps = Omit<
  Swiper.Props,
  'children' | 'onSwiper' | 'slidesPerView' | 'initialSlide' | 'direction'
> &
  Pick<ComponentPropsWithoutRef<'div'>, 'children' | 'className' | 'style'> & {
    variant?: TabsContentVariant | `${TabsContentVariant}`;
    isShadow?: boolean;
  };
