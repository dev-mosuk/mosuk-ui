import { Images as BaseImages } from '@/components/display/file/(files)/component/component';
import type { ImagesProps } from '@/components/display/file/(files)/component/component.interface';
import { ImageProps } from '@/components/display/file/(files)/component/file/component.interface';
import { Image } from '@/components/display/image/component/components/component';

export const Images = Object.assign(BaseImages, {
  Image: Image,
});

export namespace Images {
  export type Props = ImagesProps;

  export namespace Image {
    export type Props = ImageProps;
  }
}
