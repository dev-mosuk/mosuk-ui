import type { Popover as BaseUIPopover } from '@base-ui/react/popover';

export interface PopoverContextProps {
  keepMounted?: boolean;
  container?: BaseUIPopover.Portal.Props['container'];
}
