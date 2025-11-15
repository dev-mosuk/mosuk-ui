import { ComponentType, ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
import { ButtonProps } from '../../component/component.interface';

export interface ButtonSubmitProps extends ButtonProps {
  icon?:
    | ComponentType<SVGProps<SVGSVGElement>>
    | ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
  text?: string;

  loading?: {
    icon?:
      | ComponentType<SVGProps<SVGSVGElement>>
      | ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
    text?: string;
    className?: string;
    isLoading?: boolean;
  };

  success?: {
    icon?:
      | ComponentType<SVGProps<SVGSVGElement>>
      | ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
    text?: string;
    className?: string;
    isSuccess?: boolean;
  };

  error?: {
    icon?:
      | ComponentType<SVGProps<SVGSVGElement>>
      | ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
    text?: string;
    className?: string;
    isError?: boolean;
  };
}
