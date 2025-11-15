import { Input } from '../../../../../atoms/inputs/input/component/component';
import { InputProps } from '../../../../../atoms/inputs/input/component/component.interface';
import { InputHint } from '../../../../../atoms/inputs/input/component/hint/component';
import { InputHintType } from '../../../../../atoms/inputs/input/component/hint/component.enums';
import { InputHintProps } from '../../../../../atoms/inputs/input/component/hint/component.interface';
import { InputSelectInput as Component } from './input/component';
import { InputSelectInputProps } from './input/component.interface';

const InputComponent = (props: InputProps) => Input(props);

export const InputSelect = Object.assign(InputComponent, {
  Input: Component,
  Hint: Object.assign(InputHint, {
    Type: InputHintType,
  }),
});

export namespace InputSelect {
  export type Props = InputProps;

  export namespace Input {
    export type Props = InputSelectInputProps;
  }

  export namespace Hint {
    export type Props = InputHintProps;
  }
}
