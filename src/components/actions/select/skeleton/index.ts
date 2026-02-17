import { InputSkeleton as ParentSelectSkeleton } from '../../input/skeleton/component';
import type { InputSkeletonProps as ParentSelectProps } from '../../input/skeleton/component.interface';

export const InputSkeleton = Object.assign(ParentSelectSkeleton, {});

export namespace InputSkeleton {
  export type Props = ParentSelectProps;
}
