import { H6Skeleton as BaseH6Skeleton } from './component';
import { H6SkeletonProps } from './component.interface';
import { H6IconSKeleton } from './icon/component';
import { H6IconSkeletonProps } from './icon/component.interface';
import { H6TextSkeleton } from './text/component';
import { H6TextSkeletonProps } from './text/component.interface';

export const H6Skeleton = Object.assign(BaseH6Skeleton, {
  Icon: H6IconSKeleton,
  Text: H6TextSkeleton,
});

export namespace H6 {
  export type Props = H6SkeletonProps;

  export namespace Icon {
    export type Props = H6IconSkeletonProps;
  }

  export namespace Text {
    export type Props = H6TextSkeletonProps;
  }
}
