import { InputSkeleton as ParentInputSkeleton } from '../../skeleton/component';
import { InputSkeletonProps as ParentInputSkeletonProps } from '../../skeleton/component.interface';
import { InputHintSkeleton } from '../../skeleton/hint/component';
import { InputHintSkeletonProps } from '../../skeleton/hint/component.interface';
import { InputSelectInputProps } from '../component/input/component.interface';
import { InputSelectInputSkeleton } from './input/component';

const ChildInput = (props: ParentInputSkeletonProps) =>
  ParentInputSkeleton(props);

export const InputSelectSkeleton = Object.assign(ChildInput, {
  Input: InputSelectInputSkeleton,
  Hint: InputHintSkeleton,
});

export namespace InputSelectSkeleton {
  export type Props = ParentInputSkeletonProps;

  export namespace Input {
    export type Props = InputSelectInputProps;
  }

  export namespace Hint {
    export type Props = InputHintSkeletonProps;
  }
}
