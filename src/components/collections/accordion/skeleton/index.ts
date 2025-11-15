import {
  AccordionSkeleton as BaseAccordionSkeleton,
  AccordionSkeletonHeader as BaseAccordionSkeletonHeader,
  AccordionSkeletonHeaderContent as BaseAccordionSkeletonHeaderContent,
  AccordionSkeletonHeaderIcon as BaseAccordionSkeletonHeaderIcon,
  AccordionSkeletonItem as BaseAccordionSkeletonItem,
} from './component';
import type {
  AccordionSkeletonHeaderContentProps,
  AccordionSkeletonHeaderIconProps,
  AccordionSkeletonHeaderProps,
  AccordionSkeletonItemProps,
  AccordionSkeletonProps,
} from './component.interface';

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
