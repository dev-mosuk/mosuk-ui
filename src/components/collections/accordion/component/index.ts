import { Accordion as BaseAccordion } from '@/components/collections/accordion/component/component';
import type { AccordionProps } from '@/components/collections/accordion/component/component.interface';
import { AccordionItem as BaseAccordionItem } from '@/components/collections/accordion/component/item/component';
import { AccordionItemProps } from '@/components/collections/accordion/component/item/component.interface';
import { AccordionContent as BaseAccordionContent } from '@/components/collections/accordion/component/item/content/component';
import { AccordionContentProps } from '@/components/collections/accordion/component/item/content/component.interface';
import { AccordionHeader as BaseAccordionHeader } from '@/components/collections/accordion/component/item/header/component';
import { AccordionHeaderProps } from '@/components/collections/accordion/component/item/header/component.interface';
import { AccordionHeaderTrigger as BaseAccordionHeaderTrigger } from '@/components/collections/accordion/component/item/header/trigger/component';
import { AccordionHeaderTriggerProps } from '@/components/collections/accordion/component/item/header/trigger/component.interface';

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
