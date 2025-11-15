import { HTMLAttributes, RefObject, SVGProps } from 'react';

export type FileSkeletonProps = HTMLAttributes<HTMLDivElement>;
export type FileSkeletonFileProps = SVGProps<SVGSVGElement> & {
  ref?: RefObject<SVGSVGElement>;
};
