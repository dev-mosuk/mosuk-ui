import { InputHTMLAttributes, RefObject } from 'react';

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: RefObject<HTMLInputElement | null>;
};
