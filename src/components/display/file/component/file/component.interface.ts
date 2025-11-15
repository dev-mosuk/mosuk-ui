import { ImgHTMLAttributes } from 'react';

export type FileFileProps = ImgHTMLAttributes<
  HTMLImageElement | HTMLOrSVGElement
> & {
  src?: string;
  alt?: string;
};
