import { Accordion as BaseAccordion } from './component';
import type { AccordionProps } from './component.interface';
import { AccordionItem as BaseAccordionItem } from './item/component';
import { AccordionItemProps } from './item/component.interface';
import { AccordionContent as BaseAccordionContent } from './item/content/component';
import { AccordionContentProps } from './item/content/component.interface';
import { AccordionHeader as BaseAccordionHeader } from './item/header/component';
import { AccordionHeaderProps } from './item/header/component.interface';
import { AccordionHeaderContent as BaseAccordionHeaderContent } from './item/header/content/component';
import { AccordionHeaderContentProps } from './item/header/content/component.interface';

export const Accordion = Object.assign(BaseAccordion, {
  Item: BaseAccordionItem,
  Header: Object.assign(BaseAccordionHeader, {
    Content: BaseAccordionHeaderContent,
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

    export namespace Content {
      export type Props = AccordionHeaderContentProps;
    }
  }

  export namespace Content {
    export type Props = AccordionContentProps;
  }
}
