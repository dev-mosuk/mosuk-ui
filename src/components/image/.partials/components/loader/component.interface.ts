import { CanvasHTMLAttributes } from 'react';

export type ImageLoaderProps = CanvasHTMLAttributes<HTMLCanvasElement> & {
  exiting?: boolean;
};
