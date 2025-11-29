import React, { Children, isValidElement } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { BreadcrumbsButtonSkeleton } from '../skeleton/button/component';
import { BreadcrumbsIconSkeleton } from '../skeleton/icon/component';
import { BreadcrumbsButton } from './button/component';
import styles from './component.module.css';
import { BreadcrumbsIcon } from './icon/component';

export function Breadcrumbs({ children, ...rest }: SwiperProps) {
  return (
    <Swiper
      {...rest}
      modules={[]}
      freeMode={rest?.freeMode ?? true}    
      slidesPerView={rest?.slidesPerView ?? 'auto'}
      spaceBetween={rest?.spaceBetween ?? 4}
      className={`mosuk-breadcrumbs ${styles.breadcrumbs} ${rest.className ?? ''}`}
    >
      {Children.map(children, (child, index) => {        
        if (isValidElement(child) && (child.type === BreadcrumbsIcon || child.type === BreadcrumbsButton || child.type === BreadcrumbsIconSkeleton || child.type === BreadcrumbsButtonSkeleton)) {
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