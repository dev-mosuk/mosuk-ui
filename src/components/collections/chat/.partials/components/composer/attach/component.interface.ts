import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

export interface ChatComposerAttachProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  children?: ReactNode;
}
