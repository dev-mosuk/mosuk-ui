import { HTMLAttributes } from 'react';

export interface TextSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  length?: number;
}