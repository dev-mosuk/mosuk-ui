import { InputSkeleton as InputSkeletonComponent } from './component';
import type { InputSkeletonProps } from './component.interface';
import { InputHintSkeleton } from './hint/component';
import { InputHintSkeletonProps } from './hint/component.interface';
import { InputInputSkeleton } from './input/component';
import { InputInputSkeletonProps } from './input/component.interface';

export const InputSkeleton = Object.assign(InputSkeletonComponent, {
  Input: InputInputSkeleton,
  Hint: InputHintSkeleton,
});

export namespace InputSkeleton {
  export type Props = InputSkeletonProps;

  export namespace Input {
    export type Props = InputInputSkeletonProps;
  }

  export namespace Hint {
    export type Props = InputHintSkeletonProps;
  }
}
