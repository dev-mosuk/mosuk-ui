import classNames from 'classnames';
import React from 'react';
import { ImageImage } from '../../../component/image/component';
import { ImagesImageProps } from './component.interface';

export function ImagesImage({ ...rest }: ImagesImageProps) {
  return (
    <ImageImage
      {...rest}
      className={classNames('images-image', rest?.className)}
    >
      {rest?.children}
    </ImageImage>
  );
}
