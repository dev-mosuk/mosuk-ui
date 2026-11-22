import { Select as SelectPrimitive } from '@base-ui/react/select';

export type SelectTriggerProps = Omit<
  SelectPrimitive.Trigger.Props,
  'disabled'
> & {
  isDisabled?: boolean;
};
