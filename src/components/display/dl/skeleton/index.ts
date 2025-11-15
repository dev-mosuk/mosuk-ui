import {
  DlSkeleton as BaseDlSkeleton,
  DlSkeletonDd as BaseDlSkeletonDd,
  DlSkeletonDl as BaseDlSkeletonDl,
  DlSkeletonDt as BaseDlSkeletonDt,
} from './component';
import type { DlSkeletonDdProps, DlSkeletonDlProps, DlSkeletonDtProps, DlSkeletonProps } from './component.interface';
  
  export function DlSkeleton(props: DlSkeletonProps) {
    return BaseDlSkeleton(props);
  }
  
  DlSkeleton.Dl = BaseDlSkeletonDl;
  DlSkeleton.Dt = BaseDlSkeletonDt;
  DlSkeleton.Dd = BaseDlSkeletonDd;
  
  export namespace DlSkeleton {
    export type Props = DlSkeletonProps;

    export declare const Dl: typeof BaseDlSkeletonDl;
  
    export namespace Dl {
      export type Props = DlSkeletonDlProps;
    }
  
    export declare const Dt: typeof BaseDlSkeletonDt;
  
    export namespace Dt {
      export type Props = DlSkeletonDtProps;
    }

    export declare const Dd: typeof BaseDlSkeletonDd;

    export namespace Dd {
      export type Props = DlSkeletonDdProps;
    }
  }
  