import classNames from 'classnames';
import React, { Children, isValidElement } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../component.module.css';
import { DialogImagesDialogImagesProps } from './component.interface';
import { DialogImagesDialogImagesImage } from './image/component';

export function DialogImagesDialogImages({ ...rest }: DialogImagesDialogImagesProps) {
  return (
    <Swiper
      {...rest}
      modules={[Navigation, ...(rest?.modules || [])]}
      navigation={true}
      speed={rest?.speed ?? 400}
      spaceBetween={rest?.spaceBetween ?? 0}
      slidesPerView={rest?.slidesPerView ?? 1}
      draggable={rest?.draggable ?? true}
      className={classNames('dialog-images-dialog-images', styles.images, rest?.className)}
    >
      {Children.map(rest?.children, (child, index) => {
        if (isValidElement(child) && child.type === DialogImagesDialogImagesImage) {
          return (
            <SwiperSlide key={index} className={classNames('dialog-images-dialog-images-slide', rest?.className)}>
              {child}
            </SwiperSlide>
          );
        }

        return child;
      })}
    </Swiper>
  );
}
