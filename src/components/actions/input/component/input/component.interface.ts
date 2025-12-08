import {
  ComponentType,
  ForwardRefExoticComponent,
  InputHTMLAttributes,
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
};
