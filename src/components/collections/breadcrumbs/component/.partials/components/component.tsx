import React, { Children, isValidElement } from 'react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { BreadcrumbsButtonSkeleton } from '../../../skeleton/.partials/components/button/component';
import { BreadcrumbsIconSkeleton } from '../../../skeleton/.partials/components/icon/component';
import styles from '../styles/style.module.css';
import { BreadcrumbsButton } from './button/component';
import { BreadcrumbsIcon } from './icon/component';

export function Breadcrumbs({ children, ...rest }: SwiperProps) {
  return (
    <Swiper
      {...rest}
      modules={[FreeMode, Mousewheel]}
      freeMode={
        rest?.freeMode ?? {
          enabled: true,
          momentum: true,
          momentumRatio: 0.8,
          minimumVelocity: 0.05,
        }
      }
      mousewheel={
        rest?.mousewheel ?? {
          enabled: true,
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: false,
        }
      }
      slidesPerView={rest?.slidesPerView ?? 'auto'}
      spaceBetween={rest?.spaceBetween ?? 4}
      className={`mosuk-breadcrumbs ${styles.breadcrumbs} ${rest.className ?? ''}`}
    >
      {Children.map(children, (child, index) => {
        if (
          isValidElement(child) &&
          (child.type === BreadcrumbsIcon ||
            child.type === BreadcrumbsButton ||
            child.type === BreadcrumbsIconSkeleton ||
            child.type === BreadcrumbsButtonSkeleton)
        ) {
          return (
            <SwiperSlide key={index} className={styles.slide}>
              {child}
            </SwiperSlide>
          );
        }

        return child;
      })}
    </Swiper>
  );
}
