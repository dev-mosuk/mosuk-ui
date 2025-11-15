import { H2Skeleton as BaseH2Skeleton } from './component';
import { H2SkeletonProps } from './component.interface';
import { H2IconSKeleton } from './icon/component';
import { H2IconSkeletonProps } from './icon/component.interface';
import { H2TextSkeleton } from './text/component';
import { H2TextSkeletonProps } from './text/component.interface';

export const H2Skeleton = Object.assign(BaseH2Skeleton, {
  Icon: H2IconSKeleton,
  Text: H2TextSkeleton,
});

export namespace H2 {
  export type Props = H2SkeletonProps;

  export namespace Icon {
    export type Props = H2IconSkeletonProps;
  }

  export namespace Text {
    export type Props = H2TextSkeletonProps;
  }
}
