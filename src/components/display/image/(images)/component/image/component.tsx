import classNames from 'classnames';
import React from 'react';
import { ImageImage } from '../../../component/image/component';
import { ImageProps } from './component.interface';

export function Image({ ...rest }: ImageProps) {
  return (
    <ImageImage
      {...rest}
      className={classNames('images-image', rest?.className)}
    >
      {rest?.children}
    </ImageImage>
  );
}
