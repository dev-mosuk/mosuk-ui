import { InputMaskPhone as ParentComponent } from './component';
import {
  InputMaskPhoneProps,
  InputMaskPhoneProps as ParentComponentProps,
} from './component.interface';

const Component = (props: ParentComponentProps) => ParentComponent(props);

export const InputMaskPhone = Object.assign(Component, {});

export namespace InputMaskPhone {
  export type Props = InputMaskPhoneProps;
}
