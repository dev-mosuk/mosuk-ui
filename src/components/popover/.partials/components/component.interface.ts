import { Popover as BaseUIPopover } from '@base-ui/react/popover';

type PopoverOwnProps = {
  keepMounted?: boolean;
  container?: BaseUIPopover.Portal.Props['container'];
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  onOpenChangeComplete?: (isOpen: boolean) => void;
  /** @deprecated Use `isOpen` */
  open?: never;
};

export type PopoverProps = PopoverOwnProps &
  Omit<
    BaseUIPopover.Root.Props,
    'open' | 'defaultOpen' | 'onOpenChange' | 'onOpenChangeComplete'
  >;