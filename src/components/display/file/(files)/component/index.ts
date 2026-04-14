import { Image } from '../../../image/component/components/component';
import { Images as BaseImages } from './component';
import type { ImagesProps } from './component.interface';
import { ImageProps } from './file/component.interface';

export const Images = Object.assign(BaseImages, {
  Image: Image,
});

export namespace Images {
  export type Props = ImagesProps;

  export namespace Image {
    export type Props = ImageProps;
  }
}
