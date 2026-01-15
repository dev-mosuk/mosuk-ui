import { HTMLAttributes } from 'react';

export interface TextareaSkeletonTextareaProps extends HTMLAttributes<HTMLDivElement> {
  icon?: boolean;
  rows?: number;
}