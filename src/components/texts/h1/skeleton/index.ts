import { H1Skeleton as BaseH1Skeleton } from './component';
import { H1SkeletonProps } from './component.interface';
import { H1IconSKeleton } from './icon/component';
import { H1IconSkeletonProps } from './icon/component.interface';
import { H1TextSkeleton } from './text/component';
import { H1TextSkeletonProps } from './text/component.interface';

export const H1Skeleton = Object.assign(BaseH1Skeleton, {
  Icon: H1IconSKeleton,
  Text: H1TextSkeleton,
});

export namespace H1 {
  export type Props = H1SkeletonProps;

  export namespace Icon {
    export type Props = H1IconSkeletonProps;
  }

  export namespace Text {
    export type Props = H1TextSkeletonProps;
  }
}
