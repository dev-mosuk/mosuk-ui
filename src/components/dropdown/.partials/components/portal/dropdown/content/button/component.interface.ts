import type { Button } from '@/components/button';

export type DropdownPortalDropdownContentButtonDirection =
  | 'up'
  | 'down'
  | 'left'
  | 'right';

export type DropdownPortalDropdownContentButtonProps<C = 'button'> =
  Button.Props<C> & {
    isActive?: boolean;
    iconChevron?: DropdownPortalDropdownContentButtonDirection;
    iconArrow?: DropdownPortalDropdownContentButtonDirection;
  };
