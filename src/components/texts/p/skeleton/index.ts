import { PSkeleton as BasePSkeleton } from './component';
import { PSkeletonProps } from './component.interface';
import { PIconSKeleton } from './icon/component';
import { PIconSkeletonProps } from './icon/component.interface';
import { PTextSkeleton } from './text/component';
import { PTextSkeletonProps } from './text/component.interface';

export const PSkeleton = Object.assign(BasePSkeleton, {
  Icon: PIconSKeleton,
  Text: PTextSkeleton,
});

export namespace PSkeleton {
  export type Props = PSkeletonProps;

  export namespace Icon {
    export type Props = PIconSkeletonProps;
  }

  export namespace Text {
    export type Props = PTextSkeletonProps;
  }
}
