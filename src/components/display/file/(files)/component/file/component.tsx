import classNames from 'classnames';
import React from 'react';
import { ImageImage } from '../../../../image/component/image/component';
import { ImageProps } from './component.interface';

export function File({ ...rest }: ImageProps) {
  return (
    <ImageImage
      {...rest}
      className={classNames('files-file', rest?.className)}
    >
      {rest?.children}
    </ImageImage>
  );
}
