import type { HTMLAttributes } from 'react';

export type ButtonGroupSeparatorProps = {
  className?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'className' | 'children'>;
