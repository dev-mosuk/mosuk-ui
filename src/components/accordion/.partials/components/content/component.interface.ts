import type { AccordionContentVariant } from '@/components/accordion/.partials/enums/component.enums';
import { Accordion } from '@base-ui/react/accordion';

export interface AccordionContentProps extends Accordion.Panel.Props {
  isShadow?: boolean;
  variant?: AccordionContentVariant | `${AccordionContentVariant}`;
}
