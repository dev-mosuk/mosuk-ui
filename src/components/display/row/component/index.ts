import {
  Row as BaseRow,
} from './component';
import type { RowProps } from './component.interface';
  
  export function Row(props: RowProps) {
    return BaseRow(props);
  }
  
  export namespace Row {
    export type Props = RowProps;
  }
  