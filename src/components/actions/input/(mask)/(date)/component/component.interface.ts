import { InputMaskProps } from '../../component/component.interface';

export interface InputMaskDateProps
  extends Omit<InputMaskProps, 'value' | 'onChange'> {
  value?: Date;
  onChange: (value: Date) => void;
}
