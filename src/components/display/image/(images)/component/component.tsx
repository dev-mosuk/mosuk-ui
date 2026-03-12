import classNames from 'classnames';
import React, {
  Children,
  isValidElement,
  useImperativeHandle,
  useRef,
} from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from '../../component/component';
import { ImagesProps } from './component.interface';
import styles from './component.module.css';
import { ImagesImage } from './image/component';

export function Images({ ref, ...rest }: ImagesProps) {
  const swiperRef = useRef<any>(null);

  useImperativeHandle(ref, () => swiperRef.current);

  const handleHoverNavigation = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const totalSlides = Children.toArray(rest?.children).filter(
    (child) => isValidElement(child) && child.type === ImagesImage,
  );

  return (
    <Image
      as={Swiper}
      {...rest}
      ref={swiperRef}
      modules={rest?.modules ? rest?.modules : [Pagination]}
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
        if (isValidElement(child) && child.type === ImagesImage) {
          return (
            <SwiperSlide key={index} className={classNames('images-slide')}>
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
    </Image>
  );
}
