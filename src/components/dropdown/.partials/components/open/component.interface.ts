import { Popover } from '@base-ui/react/popover';

export type DropdownOpenProps = Omit<Popover.Trigger.Props, 'disabled'> & {
  isDisabled?: boolean;
};
