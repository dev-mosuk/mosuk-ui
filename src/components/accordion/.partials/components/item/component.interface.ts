import { Accordion } from '@base-ui/react/accordion';

export interface AccordionItemProps extends Omit<
  Accordion.Item.Props,
  'disabled'
> {
  isDisabled?: boolean;
}
