import {
  RefObject
} from 'react';
import { IMaskInputProps } from 'react-imask';

export type InputMaskProps = IMaskInputProps<HTMLInputElement> & { 
  ref?: RefObject<HTMLInputElement | null>;
};