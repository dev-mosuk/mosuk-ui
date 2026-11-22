import type { HTMLAttributes, ReactNode } from 'react';

export type InputGroupPrefixProps = {
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'children' | 'className'>;
