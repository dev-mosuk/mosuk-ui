import { Input as ParentInput } from '../../component/component';
import { InputProps as ParentInputProps } from '../../component/component.interface';
import { InputHint } from '../../component/hint/component';
import { InputHintType } from '../../component/hint/component.enums';
import { InputHintProps as ParentInputHintProps } from '../../component/hint/component.interface';
import { InputMaskInput } from './input/component';
import { InputMaskInputProps } from './input/component.interface';

const ChildInput = (props: ParentInputProps) => ParentInput(props);

export const InputMask = Object.assign(ChildInput, {
  Input: InputMaskInput,
  Hint: Object.assign(InputHint, {
    Type: InputHintType,
  }),
});

export namespace InputMask {
  export type Props = ParentInputProps;

  export namespace Input {
    export type Props = InputMaskInputProps;
  }

  export namespace Hint {
    export type Props = ParentInputHintProps;
  }
}
