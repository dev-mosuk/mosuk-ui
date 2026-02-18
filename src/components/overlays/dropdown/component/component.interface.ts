import { Popover } from '@base-ui/react/popover';

export interface DropdownProps extends Popover.Root.Props {}
export interface DropdownTriggerProps extends Popover.Trigger.Props {}
export interface DropdownDropdownProps extends Popover.Positioner.Props {
  container?: Popover.Portal.Props['container'];
}
export interface DropdownDropdownContentProps extends Popover.Popup.Props {}
