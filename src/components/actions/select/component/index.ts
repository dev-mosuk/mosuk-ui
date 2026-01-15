import { Input as ParentInput } from '../../component/component';
import {
  InputProps,
  InputProps as ParentInputProps,
} from '../../component/component.interface';
import { InputHintType } from '../../component/hint/component.enums';
import { InputSelectHint } from './hint/component';
import { InputSelectInput as Component } from './input/component';
import { InputSelectInputProps } from './input/component.interface';

const ChildInput = (props: ParentInputProps) => ParentInput(props);

export const InputSelect = Object.assign(ChildInput, {
  Input: Component,
  Hint: Object.assign(InputSelectHint, {
    Type: InputHintType,
  }),
});

export namespace InputSelect {
  export type Props = InputProps;

  export namespace Input {
    export type Props = InputSelectInputProps;
  }

  export namespace Hint {
    export type Props = InputHintType;
  }
}
