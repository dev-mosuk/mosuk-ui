import { InputProps } from '../../../component/component.interface';
import { InputHint } from '../../../component/hint/component';
import { InputHintType } from '../../../component/hint/component.enums';
import { InputHintProps } from '../../../component/hint/component.interface';
import { InputMask } from '../../component';
import { InputMaskInputProps } from '../../component/input/component.interface';
import { InputMaskPhoneInput as Component } from './input/component';

const InputMaskPhoneComponent = (props: InputProps) => InputMask(props);

export const InputMaskPhone = Object.assign(InputMaskPhoneComponent, {
  Input: Component,
  Hint: Object.assign(InputHint, {
    Type: InputHintType,
  }),
});

export namespace InputMaskPhone {
  export type Props = InputProps;

  export namespace Input {
    export type Props = InputMaskInputProps;
  }

  export namespace Hint {
    export type Props = InputHintProps;
  }
}
