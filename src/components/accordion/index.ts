import { Accordion as BaseAccordion } from '@/components/accordion/.partials/components/component';
import type { AccordionProps } from '@/components/accordion/.partials/components/component.interface';
import { AccordionContent as BaseAccordionContent } from '@/components/accordion/.partials/components/content/component';
import type { AccordionContentProps } from '@/components/accordion/.partials/components/content/component.interface';
import { AccordionHeader as BaseAccordionHeader } from '@/components/accordion/.partials/components/header/component';
import type { AccordionHeaderProps } from '@/components/accordion/.partials/components/header/component.interface';
import { AccordionItem as BaseAccordionItem } from '@/components/accordion/.partials/components/item/component';
import type { AccordionItemProps } from '@/components/accordion/.partials/components/item/component.interface';
import { AccordionContentVariant } from '@/components/accordion/.partials/enums/component.enums';

export const Accordion = Object.assign(BaseAccordion, {
  Item: BaseAccordionItem,
  Header: BaseAccordionHeader,
  Content: Object.assign(BaseAccordionContent, {
    ENUMS: {
      Variant: AccordionContentVariant,
    },
  }),
});

export namespace Accordion {
  export type Props = AccordionProps;

  export namespace Item {
    export type Props = AccordionItemProps;
  }

  export namespace Header {
    export type Props = AccordionHeaderProps;
  }

  export namespace Content {
    export type Props = AccordionContentProps;
  }
}
