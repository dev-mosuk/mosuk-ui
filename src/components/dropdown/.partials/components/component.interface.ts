import { Popover } from '@base-ui/react/popover';

export type DropdownProps = Omit<
  Popover.Root.Props,
  'open' | 'onOpenChange' | 'onOpenChangeComplete'
> & {
  isOpen?: boolean;
  keepMounted?: boolean;
  container?: Popover.Portal.Props['container'];
  onOpenChange?: (isOpen: boolean) => void;
  onOpenChangeComplete?: (isOpen: boolean) => void;
};
