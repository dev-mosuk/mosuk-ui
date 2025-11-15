import { ASkeleton as BaseASkeleton } from './component';
import { ASkeletonProps } from './component.interface';
import { AIconSKeleton } from './icon/component';
import { AIconSkeletonProps } from './icon/component.interface';
import { ATextSkeleton } from './text/component';
import { ATextSkeletonProps } from './text/component.interface';

export const ASkeleton = Object.assign(BaseASkeleton, {
  Icon: AIconSKeleton,
  Text: ATextSkeleton,
});

export namespace A {
  export type Props = ASkeletonProps;

  export namespace Icon {
    export type Props = AIconSkeletonProps;
  }

  export namespace Text {
    export type Props = ATextSkeletonProps;
  }
}
