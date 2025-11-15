import { InputMaskInputProps } from '../../../component/input/component.interface';

export interface InputMaskDateInputProps
  extends Omit<InputMaskInputProps, 'value' | 'onChange'> {
  value?: Date;
  onChange: (value: Date) => void;
}
