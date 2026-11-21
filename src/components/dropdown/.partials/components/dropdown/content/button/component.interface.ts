import type { Button } from '@/components/button';

export type DropdownDropdownContentButtonDirection =
  | 'up'
  | 'down'
  | 'left'
  | 'right';

export type DropdownDropdownContentButtonProps<C = 'button'> =
  Button.Props<C> & {
    isActive?: boolean;
    iconChevron?: DropdownDropdownContentButtonDirection;
    iconArrow?: DropdownDropdownContentButtonDirection;
  };
