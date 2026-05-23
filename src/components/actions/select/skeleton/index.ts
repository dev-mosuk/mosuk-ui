import { InputSkeleton as ParentSelectSkeleton } from '@/components/actions/input/skeleton/component';
import type { InputSkeletonProps as ParentSelectProps } from '@/components/actions/input/skeleton/component.interface';

export const InputSkeleton = Object.assign(ParentSelectSkeleton, {});

export namespace InputSkeleton {
  export type Props = ParentSelectProps;
}
