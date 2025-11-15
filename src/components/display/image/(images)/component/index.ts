import { Images as BaseImages } from './component';
import type { ImagesProps } from './component.interface';
import { Image } from './image/component';
import { ImageProps } from './image/component.interface';

export const Images = Object.assign(BaseImages, {
  Image: Image,
});

export namespace Images {
  export type Props = ImagesProps;

  export namespace Image {
    export type Props = ImageProps;
  }
}
