import { TextSkeleton as Component } from '@/components/texts/text/skeleton/component';
import type { TextSkeletonProps } from '@/components/texts/text/skeleton/component.interface';

export function TextSkeleton(props: TextSkeletonProps) {
  return Component(props);
}

export namespace TextSkeleton {
  export type Props = TextSkeletonProps;
}
