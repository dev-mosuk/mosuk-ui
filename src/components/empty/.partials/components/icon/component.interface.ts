import type { ReactElement, SVGAttributes } from 'react';

export type EmptyIconProps = {
  className?: string;
  children: ReactElement<SVGAttributes<SVGSVGElement>>;
} & Omit<SVGAttributes<SVGSVGElement>, 'children' | 'className'>;
