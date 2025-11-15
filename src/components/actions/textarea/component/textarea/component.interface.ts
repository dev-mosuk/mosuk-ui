import {
  ComponentType,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  RefObject,
  SVGProps,
  TextareaHTMLAttributes,
} from 'react';

export type TextareaTextareaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    ref?: RefObject<HTMLTextAreaElement | null>;
    icon?:
      | ComponentType<SVGProps<SVGSVGElement>>
      | ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
    label?: string;
    children?: ReactNode;
  };
