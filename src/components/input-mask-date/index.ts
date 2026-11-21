import { InputMaskDate as Component } from '@/components/input-mask-date/component';
import { InputMaskDateProps as ComponentProps } from '@/components/input-mask-date/component.interface';

const ChildComponent = (props: ComponentProps) => Component(props);

export const InputMaskDate = Object.assign(ChildComponent, {});

export namespace InputMaskDate {
  export type Props = ComponentProps;
}
