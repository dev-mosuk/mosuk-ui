import { InputSkeleton as ParentInputSkeleton } from '@/components/actions/input/skeleton/component';
import { InputSkeletonProps as ParentComponentProps } from '@/components/actions/input/skeleton/component.interface';

export const InputMaskSkeleton = Object.assign(ParentInputSkeleton, {});

export namespace InputMaskSkeleton {
  export type Props = ParentComponentProps;
}
