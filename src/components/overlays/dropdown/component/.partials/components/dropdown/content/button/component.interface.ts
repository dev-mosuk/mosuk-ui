import { ButtonHTMLAttributes } from 'react';

export type DropdownDropdownContentButtonDirection = 'up' | 'down' | 'left' | 'right';

export interface DropdownDropdownContentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  iconChevron?: DropdownDropdownContentButtonDirection;
  iconArrow?: DropdownDropdownContentButtonDirection;
}
