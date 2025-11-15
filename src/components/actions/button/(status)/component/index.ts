import {
  ButtonStatus as BaseButtonStatus,
} from './component';
import type {
  ButtonStatusProps
} from './component.interface';

export function ButtonStatus(props: ButtonStatusProps) {
  return BaseButtonStatus(props);
}

export namespace ButtonStatus {
  export type Props = ButtonStatusProps;
}
