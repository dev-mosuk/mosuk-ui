import {
  ButtonDelete as BaseButtonDelete
} from './component';
import type {
  ButtonDeleteProps
} from './component.interface';

export function ButtonDelete(props: ButtonDeleteProps) {
  return BaseButtonDelete(props);
}

export namespace ButtonDelete {
  export type Props = ButtonDeleteProps;
}
