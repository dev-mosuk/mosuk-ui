import { H4Skeleton as BaseH4Skeleton } from './component';
import { H4SkeletonProps } from './component.interface';
import { H4IconSKeleton } from './icon/component';
import { H4IconSkeletonProps } from './icon/component.interface';
import { H4TextSkeleton } from './text/component';
import { H4TextSkeletonProps } from './text/component.interface';

export const H4Skeleton = Object.assign(BaseH4Skeleton, {
  Icon: H4IconSKeleton,
  Text: H4TextSkeleton,
});

export namespace H4 {
  export type Props = H4SkeletonProps;

  export namespace Icon {
    export type Props = H4IconSkeletonProps;
  }

  export namespace Text {
    export type Props = H4TextSkeletonProps;
  }
}
