import { TextSkeleton as Component } from './component';
import type { TextSkeletonProps } from './component.interface';

export function TextSkeleton(props: TextSkeletonProps) {
  return Component(props);
}

export namespace TextSkeleton {
  export type Props = TextSkeletonProps;
}
