import {
  Dl as BaseDl,
  DlDd as BaseDlDd,
  DlDl as BaseDlDl,
  DlDt as BaseDlDt,
} from '@/components/display/dl/component';
import type {
  DlDlProps,
  DlProps,
  DtDdProps,
  DtDtProps,
} from '@/components/display/dl/component.interface';

export function Dl(props: DlProps) {
  return BaseDl(props);
}

Dl.Dl = BaseDlDl;
Dl.Dt = BaseDlDt;
Dl.Dd = BaseDlDd;

export namespace Dl {
  export type Props = DlProps;

  export declare const Dl: typeof BaseDlDl;

  export namespace Dl {
    export type Props = DlDlProps;
  }

  export declare const Dt: typeof BaseDlDt;

  export namespace Dt {
    export type Props = DtDtProps;
  }

  export declare const Dd: typeof BaseDlDd;

  export namespace Dd {
    export type Props = DtDdProps;
  }
}

import {
  DlSkeleton as BaseDlSkeleton,
  DlSkeletonDd as BaseDlSkeletonDd,
  DlSkeletonDl as BaseDlSkeletonDl,
  DlSkeletonDt as BaseDlSkeletonDt,
} from '@/components/display/dl/.partials/skeleton/component';
import type {
  DlSkeletonDdProps,
  DlSkeletonDlProps,
  DlSkeletonDtProps,
  DlSkeletonProps,
} from '@/components/display/dl/.partials/skeleton/component.interface';

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
