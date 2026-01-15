import { InputMask as ParentComponent } from '../../component';
import { InputMaskProps as ParentComponentProps } from '../../component/component.interface';

const Component = (props: ParentComponentProps) =>
  ParentComponent(props);

export const InputMaskPhone = Object.assign(Component, {});

export namespace InputMaskPhone {
  export type Props = ParentComponentProps;
}
