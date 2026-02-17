import { InputMaskDate as Component } from './component';
import { InputMaskDateProps as ComponentProps } from './component.interface';

const ChildComponent = (props: ComponentProps) =>
  Component(props);

export const InputMaskDate = Object.assign(ChildComponent, {});

export namespace InputMaskDate {
  export type Props = ComponentProps;
}
