import type { Input } from '@/components/input';
import type { HTMLAttributes, ReactNode } from 'react';

export type InputGroupProps = {
  variant?: Input.Props['variant'];
  size?: Input.Props['size'];
  width?: Input.Props['width'];
  isDisabled?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'className'>;
