import { Input as ParentInput } from '../../component/component';
import { InputProps as ParentInputProps } from '../../component/component.interface';
import { InputHint as ParentInputHint } from '../../component/hint/component';
import { InputHintType as ParentInputHintType } from '../../component/hint/component.enums';
import { InputHintProps as ParentInputHintProps } from '../../component/hint/component.interface';
import { InputSearchInput } from './input/component';
import { InputSearchInputProps } from './input/component.interface';

const ChildInput = (props: ParentInputProps) => ParentInput(props);

export const InputSearch = Object.assign(ChildInput, {
  Input: InputSearchInput,
  Hint: Object.assign(ParentInputHint, {
    Type: ParentInputHintType,
  }),
});

export namespace InputSearch {
  export type Props = ParentInputProps;

  export namespace Input {
    export type Props = InputSearchInputProps;
  }

  export namespace Hint {
    export type Props = ParentInputHintProps;
  }
}
