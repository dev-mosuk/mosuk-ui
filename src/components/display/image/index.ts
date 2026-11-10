import { Image as Component } from '@/components/display/image/.partials/components/component';
import { ImageProps as ComponentProps } from '@/components/display/image/.partials/components/component.interface';
import { ImageDots } from '@/components/display/image/.partials/components/dots/component';
import { ImageDotsProps } from '@/components/display/image/.partials/components/dots/component.interface';
import { ImageImage } from '@/components/display/image/.partials/components/image/component';
import { ImageImageProps } from '@/components/display/image/.partials/components/image/component.interface';

export const Image = Object.assign(Component, {
  Dots: ImageDots,
  Image: ImageImage,
});

export namespace Image {
  export type Props = ComponentProps;

  export namespace Dots {
    export type Props = ImageDotsProps;
  }

  export namespace Image {
    export type Props = ImageImageProps;
  }
}

import { ImageSkeleton as SkeletonComponent } from '@/components/display/image/.partials/skeleton/components/component';
import { ImageSkeletonProps } from '@/components/display/image/.partials/skeleton/components/component.interface';

export const ImageSkeleton = SkeletonComponent;

export namespace ImageSkeleton {
  export type Props = ImageSkeletonProps;
}
