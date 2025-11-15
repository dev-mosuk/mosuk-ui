import { Popover } from '@base-ui-components/react';
import {
  ComponentType,
  ForwardRefExoticComponent,
  HTMLAttributes,
  ReactNode,
  RefAttributes,
  SVGProps,
} from 'react';
import { InputInputProps } from '../../../../../../atoms/inputs/input/component/input/component.interface';

export interface InputSelectInputOptionProps
  extends HTMLAttributes<HTMLButtonElement> {
  icon?:
    | ComponentType<SVGProps<SVGSVGElement>>
    | ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
  label: string;
  value: string | number;
  render?: (option: InputSelectInputOptionProps) => ReactNode;
}

export interface InputSelectInputProps extends Omit<InputInputProps, 'onChange'> {
  values: InputSelectInputOptionProps[];
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (value: string | number) => void;
  onSearch?: (value: string) => void;

  align?: Popover.Positioner.Props['align'];
  side?: Popover.Positioner.Props['side'];
  alignOffset?: Popover.Positioner.Props['alignOffset'];
  sideOffset?: Popover.Positioner.Props['sideOffset'];
  sticky?: Popover.Positioner.Props['sticky'];

  container?: Popover.Portal.Props['container'];

  dropdownClassName?: string;
  dropdownContentClassName?: string;
}
