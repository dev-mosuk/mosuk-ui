import { ImagesProps } from '@/components/display/file/(files)/component/component.interface';
import styles from '@/components/display/file/(files)/component/component.module.css';
import {
  Image as ImageComponent,
  Image as ImageContainer,
} from '@/components/display/image/component/components/component';
import classNames from 'classnames';
import React, { Children, isValidElement, useRef } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export function Images({ ...rest }: ImagesProps) {
  const swiperRef = useRef<any>(null);

  const handleHoverNavigation = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const totalSlides = Children.toArray(rest?.children).filter(
    (child) => isValidElement(child) && child.type === ImageComponent,
  );

  return (
    <ImageContainer
      as={Swiper}
      {...rest}
      ref={swiperRef}
      modules={[Pagination, ...(rest?.modules || [])]}
      speed={rest?.speed ?? 400}
      spaceBetween={rest?.spaceBetween ?? 0}
      slidesPerView={rest?.slidesPerView ?? 1}
      draggable={rest?.draggable ?? true}
      pagination={{
        clickable: true,
        ...(typeof rest?.pagination === 'object' ? rest.pagination : {}),
      }}
      className={classNames('images', styles.images, rest?.className)}
    >
      {Children.map(rest?.children, (child, index) => {
        if (isValidElement(child) && child.type === ImageComponent) {
          return (
            <SwiperSlide
              key={index}
              className={classNames('images-slide', rest?.className)}
            >
              {child}
            </SwiperSlide>
          );
        }

        return child;
      })}

      {totalSlides.length > 1 && (
        <div className={styles.areas}>
          {totalSlides.map((_, index) => (
            <div
              key={index}
              className={styles.area}
              onMouseEnter={() => handleHoverNavigation(index)}
            />
          ))}
        </div>
      )}
    </ImageContainer>
  );
}
