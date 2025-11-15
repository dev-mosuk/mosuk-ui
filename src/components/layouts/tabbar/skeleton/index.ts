import { TabbarSkeleton as BaseTabbarSkeleton } from './component';
import type { TabbarSkeletonProps } from './component.interface';
import { TabbarTabsSkeleton } from './tabs/component';
import { TabbarTabsTabSkeleton } from './tabs/tab/component';
import {
  TabbarTabsTabSkeletonProps
} from './tabs/tab/component.interface';

export const TabbarSkeleton = Object.assign(BaseTabbarSkeleton, {
  Tabs: Object.assign(TabbarTabsSkeleton, {
    Tab: TabbarTabsTabSkeleton,
  }),
});

export namespace TabbarSkeleton {
  export type Props = TabbarSkeletonProps;

  export namespace Tabs {
    export type Props = TabbarTabsTabSkeletonProps;

    export namespace Tab {
      export type Props = TabbarTabsTabSkeletonProps;
    }
  }
}
