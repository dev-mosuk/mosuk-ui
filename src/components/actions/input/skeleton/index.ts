import { InputSkeleton as InputSkeletonComponent } from './component';
import type { InputSkeletonProps } from './component.interface';
import { InputHintSkeleton } from './hint/component';
import { InputHintSkeletonProps } from './hint/component.interface';
import { InputSkeletonInput } from './input/component';
import { InputSkeletonInputProps } from './input/component.interface';

export const InputSkeleton = Object.assign(InputSkeletonComponent, {
  Input: InputSkeletonInput,
  Hint: InputHintSkeleton,
});

export namespace InputSkeleton {
  export type Props = InputSkeletonProps;

  export namespace Input {
    export type Props = InputSkeletonInputProps;
  }

  export namespace Hint {
    export type Props = InputHintSkeletonProps;
  }
}
