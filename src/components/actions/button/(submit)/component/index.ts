import { ButtonSubmit as BaseButtonSubmit } from './component';
import type { ButtonSubmitProps } from './component.interface';

export function ButtonSubmit(props: ButtonSubmitProps) {
  return BaseButtonSubmit(props);
}

export namespace ButtonSubmit {
  export type Props = ButtonSubmitProps;
}
