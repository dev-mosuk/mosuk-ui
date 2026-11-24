import type { Button } from '@/components/button';
import type { HTMLAttributes } from 'react';

export type BreadcrumbsProps = {
  size?: Button.Props['size'];
  variant?: Button.Props['variant'];
} & HTMLAttributes<HTMLElement>;
