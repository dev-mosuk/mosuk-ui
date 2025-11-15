import { Hr as BaseHr } from './component';
import type { HrProps } from './component.interface';

export function Hr(props: HrProps) {
  return BaseHr(props);
}

export namespace Hr {
  export type Props = HrProps;
}
