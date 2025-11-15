import { InputSkeleton as InputSkeletonComponent } from '../../../input/skeleton/component';
import { InputSkeletonProps } from '../../skeleton/component.interface';
import { InputHintSkeleton } from '../../skeleton/hint/component';
import { InputHintSkeletonProps } from '../../skeleton/hint/component.interface';
import { InputSkeletonInput } from '../../skeleton/input/component';
import { InputSkeletonInputProps } from '../../skeleton/input/component.interface';

export const InputSelectSkeleton = Object.assign(InputSkeletonComponent, {
  Input: InputSkeletonInput,
  Hint: InputHintSkeleton,
});

export namespace InputSelectSkeleton {
  export type Props = InputSkeletonProps;

  export namespace Input {
    export type Props = InputSkeletonInputProps;
  }

  export namespace Hint {
    export type Props = InputHintSkeletonProps;
  }
}
