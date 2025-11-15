import { InputProps } from '../../../component/component.interface';
import { InputHint } from '../../../component/hint/component';
import { InputHintType } from '../../../component/hint/component.enums';
import { InputHintProps } from '../../../component/hint/component.interface';
import { InputMask } from '../../component';
import { InputMaskDateInput as Component } from './input/component';
import { InputMaskDateInputProps } from './input/component.interface';

const InputMaskDateComponent = (props: InputProps) => InputMask(props);

export const InputMaskDate = Object.assign(InputMaskDateComponent, {
  Input: Component,
  Hint: Object.assign(InputHint, {
    Type: InputHintType,
  }),
});

export namespace InputMaskDate {
  export type Props = InputProps;

  export namespace Input {
    export type Props = InputMaskDateInputProps;
  }

  export namespace Hint {
    export type Props = InputHintProps;
  }
}
