import { Input as Component } from './component';
import type { InputProps } from './component.interface';
import { InputHint } from './hint/component';
import { InputHintType } from './hint/component.enums';
import { InputHintProps } from './hint/component.interface';
import { InputInput } from './input/component';
import { InputInputProps } from './input/component.interface';

export const Input = Object.assign(Component, {
  Input: InputInput,
  Hint: Object.assign(InputHint, {
    Type: InputHintType,
  }),
});

export namespace Input {
  export type Props = InputProps;

  export namespace Input {
    export type Props = InputInputProps;
  }

  export namespace Hint {
    export type Props = InputHintProps;
  }
}
