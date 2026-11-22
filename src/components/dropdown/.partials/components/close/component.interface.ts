import { Popover } from '@base-ui/react/popover';

export type DropdownCloseProps = Omit<Popover.Close.Props, 'disabled'> & {
  isDisabled?: boolean;
};
