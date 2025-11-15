import { InputProps as ParentInputProps } from '../../../component/component.interface';
import { InputHint as ParentInputHint } from '../../../component/hint/component';
import { InputHintType as ParentInputHintType } from '../../../component/hint/component.enums';
import { InputHintProps as ParentInputHintProps } from '../../../component/hint/component.interface';
import { InputMask as ParentInputMask } from '../../component';
import { InputMaskDateInput } from './input/component';
import { InputMaskDateInputProps } from './input/component.interface';

const ChildInputMask = (props: ParentInputProps) => ParentInputMask(props);

export const InputMaskDate = Object.assign(ChildInputMask, {
  Input: InputMaskDateInput,
  Hint: Object.assign(ParentInputHint, {
    Type: ParentInputHintType,
  }),
});

export namespace InputMaskDate {
  export type Props = ParentInputProps;

  export namespace Input {
    export type Props = InputMaskDateInputProps;
  }

  export namespace Hint {
    export type Props = ParentInputHintProps;
  }
}
