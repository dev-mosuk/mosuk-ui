import type { Popover } from '@base-ui/react/popover';

export interface DropdownContextProps {
  keepMounted?: boolean;
  container?: Popover.Portal.Props['container'];
}
