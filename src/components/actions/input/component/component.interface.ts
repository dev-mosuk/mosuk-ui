import { FieldsetHTMLAttributes, RefObject } from 'react';

export interface InputContextProps {}

export interface InputProps
  extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  ref?: RefObject<HTMLFieldSetElement | null>;
}
