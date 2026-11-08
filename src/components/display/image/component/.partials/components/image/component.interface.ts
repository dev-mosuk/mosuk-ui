import { ImgHTMLAttributes } from 'react';

export type ImageImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string | null;
};
