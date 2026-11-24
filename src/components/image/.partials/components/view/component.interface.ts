import type { ImgHTMLAttributes } from 'react';

export type ImageViewProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'loading'
> & {
  src: string | null;
  loading?: ImgHTMLAttributes<HTMLImageElement>['loading'];
};