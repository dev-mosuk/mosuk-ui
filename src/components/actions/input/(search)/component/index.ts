import { Input as ParentInput } from '../../../../../atoms/inputs/input/component';
import { InputProps as ParentInputProps } from '../../../../../atoms/inputs/input/component/component.interface';
import { InputHint } from '../../../../../atoms/inputs/input/component/hint/component';
import { InputHintType as ParentInputHintType } from '../../../../../atoms/inputs/input/component/hint/component.enums';
import { InputHintProps as ParentInputHintProps } from '../../../../../atoms/inputs/input/component/hint/component.interface';
import { Input } from './input/component';
import { InputProps } from './input/component.interface';

const ChildInput = (props: ParentInputProps) => ParentInput(props);

export const InputSearch = Object.assign(ChildInput, {
  Input: Input,
  Hint: Object.assign(InputHint, {
    Type: ParentInputHintType,
  }),
});

export namespace InputSearch {
  export type Props = ParentInputProps;

  export namespace Input {
    export type Props = InputProps;
  }

  export namespace Hint {
    export type Props = ParentInputHintProps;
  }
}
