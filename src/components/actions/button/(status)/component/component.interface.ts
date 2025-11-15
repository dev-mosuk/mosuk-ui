import { Popover } from '@base-ui-components/react';
import { ComponentType, ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
import { ButtonProps } from '../../component/component.interface';

export interface StatusOption {
  status: string;
  text: string;
  icon?:
    | ComponentType<SVGProps<SVGSVGElement>>
    | ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
  className?: string;
  iconClassName?: string;
}

export interface ButtonStatusProps extends Omit<ButtonProps, 'onChange'> {
  value?: string;
  values?: StatusOption[];
  onChange?: (newValue: string) => void;
  disabled?: boolean;

  className?: string;  

  side?: Popover.Positioner.Props['side'];
  sideOffset?: Popover.Positioner.Props['sideOffset'];
  align?: Popover.Positioner.Props['align'];
  alignOffset?: Popover.Positioner.Props['alignOffset'];
  container?: Popover.Portal.Props['container'];
}
