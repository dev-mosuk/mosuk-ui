import {
  ComponentType,
  ForwardRefExoticComponent,
  InputHTMLAttributes,
  ReactNode,
  RefAttributes,
  RefObject,
  SVGProps,
} from 'react';

export type InputInputProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: RefObject<HTMLInputElement | null>;
  icon?:
    | ComponentType<SVGProps<SVGSVGElement>>
    | ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
  label?: string;
  children?: ReactNode;
};