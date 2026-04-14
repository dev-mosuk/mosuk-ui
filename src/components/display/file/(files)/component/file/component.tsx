import classNames from 'classnames';
import React from 'react';
import { Image } from '../../../../image/component/components/component';
import { ImageProps } from './component.interface';

export function File({ ...rest }: ImageProps) {
  return (
    <Image
      {...rest}
      className={classNames('files-file', rest?.className)}
    >
      {rest?.children}
    </Image>
  );
}
