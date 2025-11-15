import {
  ComponentType,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  RefObject,
  SVGProps
} from 'react';
import { IMaskInputProps } from 'react-imask';

export type InputMaskInputProps = IMaskInputProps<HTMLInputElement> & { 
  ref?: RefObject<HTMLInputElement | null>;
  icon?: 
    | ComponentType<SVGProps<SVGSVGElement>>
    | ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
  label?: string;
  children?: ReactNode;
};