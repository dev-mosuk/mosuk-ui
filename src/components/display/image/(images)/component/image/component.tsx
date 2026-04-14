import classNames from 'classnames';
import React from 'react';
import { Image } from '../../../component/components/component';
import { ImagesImageProps } from './component.interface';

export function ImagesImage({ ...rest }: ImagesImageProps) {
  return (
    <Image
      {...rest}
      className={classNames('images-image', rest?.className)}
    >
      {rest?.children}
    </Image>
  );
}
