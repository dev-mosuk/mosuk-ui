import { Images as BaseImages } from './component';
import type { ImagesProps } from './component.interface';
import { ImagesImage } from './image/component';
import { ImagesImageProps } from './image/component.interface';

export const Images = Object.assign(BaseImages, {
  Image: ImagesImage,
});

export namespace Images {
  export type Props = ImagesProps;

  export namespace Image {
    export type Props = ImagesImageProps;
  }
}
