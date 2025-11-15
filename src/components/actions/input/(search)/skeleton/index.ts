import { InputSkeleton as ParentInputSkeleton } from '../../../input/skeleton/component';
import { InputSkeletonProps as ParentInputSkeletonProps } from '../../../input/skeleton/component.interface';
import { InputHintSkeleton as ParentInputHintSkeleton } from '../../skeleton/hint/component';
import { InputHintSkeletonProps as ParentInputHintSkeletonProps } from '../../skeleton/hint/component.interface';
import { InputInputSkeleton as ParentInputInputSkeleton } from '../../skeleton/input/component';
import { InputInputSkeletonProps as ParentInputInputSkeletonProps } from '../../skeleton/input/component.interface';

const ChildInputSkeleton = (props: ParentInputSkeletonProps) =>
  ParentInputSkeleton(props);

export const InputSearchSkeleton = Object.assign(ChildInputSkeleton, {
  Input: ParentInputInputSkeleton,
  Hint: ParentInputHintSkeleton,
});

export namespace InputSearchSkeleton {
  export type Props = ParentInputSkeletonProps;

  export namespace Input {
    export type Props = ParentInputInputSkeletonProps;
  }

  export namespace Hint {
    export type Props = ParentInputHintSkeletonProps;
  }
}
