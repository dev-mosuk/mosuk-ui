import { CanvasHTMLAttributes } from 'react';

export type ImageDotsProps = CanvasHTMLAttributes<HTMLCanvasElement> & {
  exiting?: boolean;
};
