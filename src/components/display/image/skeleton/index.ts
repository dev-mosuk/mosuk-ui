import { ImagesSkeletonProps } from '../(images)/skeleton/component.interface';
import { ImageSkeleton as BaseImageSkeleton } from './component';
import { ImageImageSkeleton as BaseImageImageSkeleton } from './image/component';
import { ImageImageSkeletonProps } from './image/component.interface';

export const ImageSkeleton = Object.assign(BaseImageSkeleton, {
  Image: BaseImageImageSkeleton
});

export namespace ImageSkeleton {
  export type Props = ImagesSkeletonProps;

  export namespace Image {
    export type Props = ImageImageSkeletonProps;
  }
}
