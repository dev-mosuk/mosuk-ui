import { InputProps as ParentInputProps } from '../../../component/component.interface';
import { InputHint as ParentInputHint } from '../../../component/hint/component';
import { InputHintType as ParentInputHintType } from '../../../component/hint/component.enums';
import { InputHintProps as ParentInputHintProps } from '../../../component/hint/component.interface';
import { InputMask as ParentInputMask } from '../../component';
import { InputMaskInputProps } from '../../component/input/component.interface';
import { InputMaskPhoneInput as Component } from './input/component';

const InputMaskPhoneComponent = (props: ParentInputProps) =>
  ParentInputMask(props);

export const InputMaskPhone = Object.assign(InputMaskPhoneComponent, {
  Input: Component,
  Hint: Object.assign(ParentInputHint, {
    Type: ParentInputHintType,
  }),
});

export namespace InputMaskPhone {
  export type Props = ParentInputProps;

  export namespace Input {
    export type Props = InputMaskInputProps;
  }

  export namespace Hint {
    export type Props = ParentInputHintProps;
  }
}
