import type { Input } from '@/components/input';
import type { HTMLAttributes, ReactNode } from 'react';

export type InputGroupProps = {
  variant?: Input.Props['variant'];
  size?: Input.Props['size'];
  isDisabled?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'className'>;
