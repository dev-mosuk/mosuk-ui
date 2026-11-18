import { ButtonHTMLAttributes } from 'react';

export type DropdownPortalDropdownContentButtonDirection =
  | 'up'
  | 'down'
  | 'left'
  | 'right';

export interface DropdownPortalDropdownContentButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  iconChevron?: DropdownPortalDropdownContentButtonDirection;
  iconArrow?: DropdownPortalDropdownContentButtonDirection;
}
