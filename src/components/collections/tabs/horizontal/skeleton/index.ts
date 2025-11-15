import { TabsHorizontalSkeleton as BaseTabsHorizontalSkeleton } from './component';
import type { TabsHorizontalSkeletonProps } from './component.interface';
import { TabsHorizontalContentSkeleton } from './content/component';
import { TabsHorizontalContentSkeletonProps } from './content/component.interface';
import { TabsHorizontalHeadSkeleton } from './head/component';
import { TabsHorizontalHeadSkeletonProps } from './head/component.interface';
import { TabsHorizontalHeadTabSkeleton } from './head/tab/component';
import { TabsHorizontalHeadTabSkeletonProps } from './head/tab/component.interface';

export const TabsHorizontalSkeleton = Object.assign(
  BaseTabsHorizontalSkeleton,
  {
    Head: Object.assign(TabsHorizontalHeadSkeleton, {
      Tab: TabsHorizontalHeadTabSkeleton,
    }),
    Content: TabsHorizontalContentSkeleton,
  }
);

export namespace TabsHorizontal {
  export type Props = TabsHorizontalSkeletonProps;

  export namespace Head {
    export type Props = TabsHorizontalHeadSkeletonProps;

    export namespace Tab {
      export type Props = TabsHorizontalHeadTabSkeletonProps;
    }
  }

  export namespace Content {
    export type Props = TabsHorizontalContentSkeletonProps;
  }
}
