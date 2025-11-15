import { HTMLAttributes, RefObject, SVGProps } from 'react';

export type ImagesSkeletonProps = HTMLAttributes<HTMLDivElement>;

export type ImagesSkeletonImageProps = SVGProps<SVGSVGElement> & {
  ref?: RefObject<SVGSVGElement>;
};
