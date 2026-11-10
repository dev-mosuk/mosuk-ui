import { Accordion as BaseAccordion } from '@/components/collections/accordion/component';
import type { AccordionProps } from '@/components/collections/accordion/component.interface';
import { AccordionItem as BaseAccordionItem } from '@/components/collections/accordion/item/component';
import { AccordionItemProps } from '@/components/collections/accordion/item/component.interface';
import { AccordionContent as BaseAccordionContent } from '@/components/collections/accordion/item/content/component';
import { AccordionContentProps } from '@/components/collections/accordion/item/content/component.interface';
import { AccordionHeader as BaseAccordionHeader } from '@/components/collections/accordion/item/header/component';
import { AccordionHeaderProps } from '@/components/collections/accordion/item/header/component.interface';
import { AccordionHeaderTrigger as BaseAccordionHeaderTrigger } from '@/components/collections/accordion/item/header/trigger/component';
import { AccordionHeaderTriggerProps } from '@/components/collections/accordion/item/header/trigger/component.interface';

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

import {
  AccordionSkeleton as BaseAccordionSkeleton,
  AccordionSkeletonHeader as BaseAccordionSkeletonHeader,
  AccordionSkeletonHeaderContent as BaseAccordionSkeletonHeaderContent,
  AccordionSkeletonHeaderIcon as BaseAccordionSkeletonHeaderIcon,
  AccordionSkeletonItem as BaseAccordionSkeletonItem,
} from '@/components/collections/accordion/.partials/skeleton/component';
import type {
  AccordionSkeletonHeaderContentProps,
  AccordionSkeletonHeaderIconProps,
  AccordionSkeletonHeaderProps,
  AccordionSkeletonItemProps,
  AccordionSkeletonProps,
} from '@/components/collections/accordion/.partials/skeleton/component.interface';

export const AccordionSkeleton = Object.assign(BaseAccordionSkeleton, {
  Item: BaseAccordionSkeletonItem,
  Header: Object.assign(BaseAccordionSkeletonHeader, {
    Content: BaseAccordionSkeletonHeaderContent,
    Icon: BaseAccordionSkeletonHeaderIcon,
  }),
}) as typeof BaseAccordionSkeleton & {
  Item: typeof BaseAccordionSkeletonItem;
  Header: typeof BaseAccordionSkeletonHeader & {
    Content: typeof BaseAccordionSkeletonHeaderContent;
    Icon: typeof BaseAccordionSkeletonHeaderIcon;
  };
};

export namespace AccordionSkeleton {
  export type Props = AccordionSkeletonProps;

  export namespace Item {
    export type Props = AccordionSkeletonItemProps;
  }

  export namespace Header {
    export type Props = AccordionSkeletonHeaderProps;

    export namespace Content {
      export type Props = AccordionSkeletonHeaderContentProps;
    }

    export namespace Icon {
      export type Props = AccordionSkeletonHeaderIconProps;
    }
  }
}
