import { Accordion } from '@base-ui/react/accordion';

export interface AccordionProps extends Omit<Accordion.Root.Props, 'disabled'> {
  isDisabled?: boolean;
}
