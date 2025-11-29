import React from 'react';
import { ImageImage } from '../../../../../../../display/image/component/image/component';
import { DialogImagesDialogImagesImageProps } from './component.interface';

export function DialogImagesDialogImagesImage({ ...rest }: DialogImagesDialogImagesImageProps) {
  return <ImageImage {...rest}>{rest?.children}</ImageImage>;
}
