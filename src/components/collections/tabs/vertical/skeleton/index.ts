import { TabsVerticalSkeleton as BaseTabsVerticalSkeleton } from '@/components/collections/tabs/vertical/skeleton/component';
import type { TabsVerticalSkeletonProps } from '@/components/collections/tabs/vertical/skeleton/component.interface';
import { TabsVerticalContentSkeleton } from '@/components/collections/tabs/vertical/skeleton/content/component';
import { TabsVerticalContentSkeletonProps } from '@/components/collections/tabs/vertical/skeleton/content/component.interface';
import { TabsVerticalHeadSkeleton } from '@/components/collections/tabs/vertical/skeleton/head/component';
import { TabsVerticalHeadSkeletonProps } from '@/components/collections/tabs/vertical/skeleton/head/component.interface';
import { TabsVerticalHeadTabSkeleton } from '@/components/collections/tabs/vertical/skeleton/head/tab/component';
import { TabsVerticalHeadTabSkeletonProps } from '@/components/collections/tabs/vertical/skeleton/head/tab/component.interface';

export const TabsVerticalSkeleton = Object.assign(BaseTabsVerticalSkeleton, {
  Head: Object.assign(TabsVerticalHeadSkeleton, {
    Tab: TabsVerticalHeadTabSkeleton,
  }),
  Content: TabsVerticalContentSkeleton,
});

export namespace TabsVertical {
  export type Props = TabsVerticalSkeletonProps;

  export namespace Head {
    export type Props = TabsVerticalHeadSkeletonProps;

    export namespace Tab {
      export type Props = TabsVerticalHeadTabSkeletonProps;
    }
  }

  export namespace Content {
    export type Props = TabsVerticalContentSkeletonProps;
  }
}
