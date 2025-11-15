import { Buttons as BaseButtons } from './component';
import type { ButtonsProps } from './component.interface';

export function Buttons(props: ButtonsProps) {
  return BaseButtons(props);
}

export namespace Buttons {
  export type Props = ButtonsProps;
}
