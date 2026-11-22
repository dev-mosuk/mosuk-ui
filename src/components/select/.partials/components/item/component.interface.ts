import { Select as SelectPrimitive } from '@base-ui/react/select';

export type SelectItemProps = Omit<SelectPrimitive.Item.Props, 'disabled'> & {
  isDisabled?: boolean;
};
