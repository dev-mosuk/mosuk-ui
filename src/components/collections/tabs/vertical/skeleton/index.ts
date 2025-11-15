import { TabsVerticalSkeleton as BaseTabsVerticalSkeleton } from './component';
import type { TabsVerticalSkeletonProps } from './component.interface';
import { TabsVerticalContentSkeleton } from './content/component';
import { TabsVerticalContentSkeletonProps } from './content/component.interface';
import { TabsVerticalHeadSkeleton } from './head/component';
import { TabsVerticalHeadSkeletonProps } from './head/component.interface';
import { TabsVerticalHeadTabSkeleton } from './head/tab/component';
import { TabsVerticalHeadTabSkeletonProps } from './head/tab/component.interface';

export const TabsVerticalSkeleton = Object.assign(
  BaseTabsVerticalSkeleton,
  {
    Head: Object.assign(TabsVerticalHeadSkeleton, {
      Tab: TabsVerticalHeadTabSkeleton,
    }),
    Content: TabsVerticalContentSkeleton,
  }
);

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
