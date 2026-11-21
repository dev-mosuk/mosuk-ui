import { Accordion as BaseAccordion } from '@/components/accordion/component';
import type { AccordionProps } from '@/components/accordion/component.interface';
import { AccordionItem as BaseAccordionItem } from '@/components/accordion/item/component';
import { AccordionItemProps } from '@/components/accordion/item/component.interface';
import { AccordionContent as BaseAccordionContent } from '@/components/accordion/item/content/component';
import { AccordionContentProps } from '@/components/accordion/item/content/component.interface';
import { AccordionHeader as BaseAccordionHeader } from '@/components/accordion/item/header/component';
import { AccordionHeaderProps } from '@/components/accordion/item/header/component.interface';
import { AccordionHeaderTrigger as BaseAccordionHeaderTrigger } from '@/components/accordion/item/header/trigger/component';
import { AccordionHeaderTriggerProps } from '@/components/accordion/item/header/trigger/component.interface';

export const Accordion = Object.assign(BaseAccordion, {
  Item: BaseAccordionItem,
  Header: Object.assign(BaseAccordionHeader, {
    Trigger: BaseAccordionHeaderTrigger,
  }),
  Content: BaseAccordionContent,
});

export namespace Accordion {
  export type Props = AccordionProps;

  export namespace Item {
    export type Props = AccordionItemProps;
  }

  export namespace Header {
    export type Props = AccordionHeaderProps;

    export namespace Trigger {
      export type Props = AccordionHeaderTriggerProps;
    }
  }

  export namespace Content {
    export type Props = AccordionContentProps;
  }
}
