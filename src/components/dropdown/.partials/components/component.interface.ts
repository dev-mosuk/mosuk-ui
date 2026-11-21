import { Popover } from '@base-ui/react/popover';

export interface DropdownProps extends Popover.Root.Props {
  keepMounted?: boolean;
  container?: Popover.Portal.Props['container'];
}
