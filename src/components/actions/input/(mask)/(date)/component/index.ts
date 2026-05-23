import { InputMaskDate as Component } from '@/components/actions/input/(mask)/(date)/component/component';
import { InputMaskDateProps as ComponentProps } from '@/components/actions/input/(mask)/(date)/component/component.interface';

const ChildComponent = (props: ComponentProps) => Component(props);

export const InputMaskDate = Object.assign(ChildComponent, {});

export namespace InputMaskDate {
  export type Props = ComponentProps;
}
