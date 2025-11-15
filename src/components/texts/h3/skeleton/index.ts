import { H3Skeleton as BaseH3Skeleton } from './component';
import { H3SkeletonProps } from './component.interface';
import { H3IconSKeleton } from './icon/component';
import { H3IconSkeletonProps } from './icon/component.interface';
import { H3TextSkeleton } from './text/component';
import { H3TextSkeletonProps } from './text/component.interface';

export const H3Skeleton = Object.assign(BaseH3Skeleton, {
  Icon: H3IconSKeleton,
  Text: H3TextSkeleton,
});

export namespace H3 {
  export type Props = H3SkeletonProps;

  export namespace Icon {
    export type Props = H3IconSkeletonProps;
  }

  export namespace Text {
    export type Props = H3TextSkeletonProps;
  }
}
