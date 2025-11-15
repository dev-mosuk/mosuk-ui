import { Input } from '../../component/component';
import { InputProps } from '../../component/component.interface';
import { InputHint } from '../../component/hint/component';
import { InputHintType } from '../../component/hint/component.enums';
import { InputHintProps } from '../../component/hint/component.interface';
import { InputMaskInput as Component } from './input/component';
import { InputMaskInputProps } from './input/component.interface';

const MaskInputComponent = (props: InputProps) => Input(props);

export const InputMask = Object.assign(MaskInputComponent, {
  Input: Component,
  Hint: Object.assign(InputHint, {
    Type: InputHintType,
  }),
});

export namespace InputMask {
  export type Props = InputProps;

  export namespace Input {
    export type Props = InputMaskInputProps;
  }

  export namespace Hint {
    export type Props = InputHintProps;
  }
}
