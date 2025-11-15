import {
    Grid as BaseGrid,
} from './component';
import type { GridProps } from './component.interface';
  
  export function Grid(props: GridProps) {
    return BaseGrid(props);
  }
  
  export namespace Grid {
    export type Props = GridProps;
}