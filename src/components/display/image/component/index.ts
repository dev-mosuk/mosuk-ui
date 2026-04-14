import { Image as BaseImage } from './components/component';
import type { ImageProps } from './components/component.interface';

export const Image = Object.assign(BaseImage, {});

export namespace Image {
  export type Props = ImageProps;
}
