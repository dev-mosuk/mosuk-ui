import { Image as BaseImage } from '@/components/display/image/component/components/component';
import type { ImageProps } from '@/components/display/image/component/components/component.interface';

export const Image = Object.assign(BaseImage, {});

export namespace Image {
  export type Props = ImageProps;
}
