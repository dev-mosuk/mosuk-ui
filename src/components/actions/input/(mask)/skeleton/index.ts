import { InputSkeleton as InputSkeletonComponent } from '../../skeleton/index';

export const InputMaskSkeleton = Object.assign(InputSkeletonComponent, {
  Input: InputSkeletonComponent.Input,
  Hint: InputSkeletonComponent.Hint,
});

export namespace InputMaskSkeleton {
  export type Props = InputSkeletonComponent.Props;

  export namespace Input {
    export type Props = InputSkeletonComponent.Input.Props;
  }

  export namespace Hint {
    export type Props = InputSkeletonComponent.Hint.Props;
  }
}
