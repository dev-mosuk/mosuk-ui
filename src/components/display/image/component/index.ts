import { Image as BaseImage } from './component';
import type {
  ImageProps
} from './component.interface';
import {
  ImageImage as BaseImageImage
} from './image/component';
import { ImageImageProps } from './image/component.interface';

export const Image = Object.assign(BaseImage, {
  Image: BaseImageImage
});

export namespace Image {
  export type Props = ImageProps;

  export namespace Image {
    export type Props = ImageImageProps;
  }
}
