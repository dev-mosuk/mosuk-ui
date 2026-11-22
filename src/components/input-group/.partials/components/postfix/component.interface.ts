import type { HTMLAttributes, ReactNode } from 'react';

export type InputGroupPostfixProps = {
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'children' | 'className'>;
