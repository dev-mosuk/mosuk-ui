import { InputSkeleton as ParentSelectSkeleton } from '../../input/skeleton/component';
import { InputSkeletonProps as ParentComponentProps } from '../../input/skeleton/component.interface';

export const SelectSkeleton = Object.assign(ParentSelectSkeleton, {});

export namespace SelectSkeleton {
  export type Props = ParentComponentProps;
}
