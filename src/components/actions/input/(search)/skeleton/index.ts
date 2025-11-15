import { InputSkeleton as ParentInput } from '../../../../../atoms/inputs/input/skeleton/component';
import { InputSkeletonProps as ParentInputProps } from '../../../../../atoms/inputs/input/skeleton/component.interface';
import { InputHintSkeleton } from '../../../../../atoms/inputs/input/skeleton/hint/component';
import { InputHintSkeletonProps as ParentInputHintSkeletonProps } from '../../../../../atoms/inputs/input/skeleton/hint/component.interface';
import { InputSkeletonInput } from '../../../../../atoms/inputs/input/skeleton/input/component';
import { InputSkeletonInputProps as ParentInputInputSkeletonProps } from '../../../../../atoms/inputs/input/skeleton/input/component.interface';

const ChildInputSkeleton = (props: ParentInputProps) => ParentInput(props);

export const InputSearchSkeleton = Object.assign(ChildInputSkeleton, {
  Input: InputSkeletonInput,
  Hint: InputHintSkeleton,
});

export namespace InputSearchSkeleton {
  export type Props = ParentInputProps;

  export namespace Input {
    export type Props = ParentInputInputSkeletonProps;
  }

  export namespace Hint {
    export type Props = ParentInputHintSkeletonProps;
  }
}
