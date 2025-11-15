import { InputSkeletonProps } from '../../../../../../atoms/inputs/input/skeleton/component.interface';
import { InputHintSkeleton } from '../../../../../../atoms/inputs/input/skeleton/hint/component';
import { InputHintSkeletonProps } from '../../../../../../atoms/inputs/input/skeleton/hint/component.interface';
import { InputSkeleton as InputSkeletonComponent } from '../../../../../../atoms/inputs/input/skeleton/index';
import { InputSkeletonInput } from '../../../../../../atoms/inputs/input/skeleton/input/component';
import { InputSkeletonInputProps } from '../../../../../../atoms/inputs/input/skeleton/input/component.interface';

export const InputMaskDateSkeleton = Object.assign(InputSkeletonComponent, {
  Input: InputSkeletonInput,
  Hint: InputHintSkeleton,
});

export namespace InputMaskDateSkeleton {
  export type Props = InputSkeletonProps;

  export namespace Input {
    export type Props = InputSkeletonInputProps;
  }

  export namespace Hint {
    export type Props = InputHintSkeletonProps;
  }
}
