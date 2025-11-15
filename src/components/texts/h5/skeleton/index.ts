import { H5Skeleton as BaseH5Skeleton } from './component';
import { H5SkeletonProps } from './component.interface';
import { H5IconSKeleton } from './icon/component';
import { H5IconSkeletonProps } from './icon/component.interface';
import { H5TextSkeleton } from './text/component';
import { H5TextSkeletonProps } from './text/component.interface';

export const H5Skeleton = Object.assign(BaseH5Skeleton, {
  Icon: H5IconSKeleton,
  Text: H5TextSkeleton,
});

export namespace H5 {
  export type Props = H5SkeletonProps;

  export namespace Icon {
    export type Props = H5IconSkeletonProps;
  }

  export namespace Text {
    export type Props = H5TextSkeletonProps;
  }
}
