import {
  ImagesSkeleton as BaseImagesSkeleton,
  ImagesSkeletonImage as BaseImagesSkeletonImage,
} from './component';
import type { ImagesSkeletonImageProps, ImagesSkeletonProps } from './component.interface';

export function ImagesSkeleton(props: ImagesSkeletonProps) {
  return BaseImagesSkeleton(props);  
}

ImagesSkeleton.Image = BaseImagesSkeletonImage;

export namespace ImagesSkeleton {
  export type Props = ImagesSkeletonProps;

  export declare const Image: typeof BaseImagesSkeletonImage;

  export namespace Image {
    export type Props = ImagesSkeletonImageProps;
  }
}
