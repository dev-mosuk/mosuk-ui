import { Grid as BaseGrid } from '@/components/containers/grid/component/component';
import type { GridProps } from '@/components/containers/grid/component/component.interface';

export function Grid(props: GridProps) {
  return BaseGrid(props);
}

export namespace Grid {
  export type Props = GridProps;
}
