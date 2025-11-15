import React from 'react';
import { Image as ImageComponent } from '../../../../../../../display/image/component/component';
import { ImageProps } from './component.interface';

export function Image({ ...rest }: ImageProps) {
  return <ImageComponent {...rest}>{rest?.children}</ImageComponent>;
}
