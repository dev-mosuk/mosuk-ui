import {
  Dl as BaseDl,
  DlDd as BaseDlDd,
  DlDl as BaseDlDl,
  DlDt as BaseDlDt,
} from './component';
import type { DlDlProps, DlProps, DtDdProps, DtDtProps } from './component.interface';
  
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
  