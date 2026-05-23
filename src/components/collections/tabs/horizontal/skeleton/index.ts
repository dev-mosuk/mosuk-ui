import { TabsHorizontalSkeleton as BaseTabsHorizontalSkeleton } from '@/components/collections/tabs/horizontal/skeleton/component';
import type { TabsHorizontalSkeletonProps } from '@/components/collections/tabs/horizontal/skeleton/component.interface';
import { TabsHorizontalContentSkeleton } from '@/components/collections/tabs/horizontal/skeleton/content/component';
import { TabsHorizontalContentSkeletonProps } from '@/components/collections/tabs/horizontal/skeleton/content/component.interface';
import { TabsHorizontalHeadSkeleton } from '@/components/collections/tabs/horizontal/skeleton/head/component';
import { TabsHorizontalHeadSkeletonProps } from '@/components/collections/tabs/horizontal/skeleton/head/component.interface';
import { TabsHorizontalHeadTabSkeleton } from '@/components/collections/tabs/horizontal/skeleton/head/tab/component';
import { TabsHorizontalHeadTabSkeletonProps } from '@/components/collections/tabs/horizontal/skeleton/head/tab/component.interface';

export const TabsHorizontalSkeleton = Object.assign(
  BaseTabsHorizontalSkeleton,
  {
    Head: Object.assign(TabsHorizontalHeadSkeleton, {
      Tab: TabsHorizontalHeadTabSkeleton,
    }),
    Content: TabsHorizontalContentSkeleton,
  },
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
