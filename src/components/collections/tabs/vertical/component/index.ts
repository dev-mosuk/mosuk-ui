import { TabsVertical as TabsVerticalComponent } from '@/components/collections/tabs/vertical/component/component';
import { TabsVerticalProps } from '@/components/collections/tabs/vertical/component/component.interface';
import { TabsVerticalContent } from '@/components/collections/tabs/vertical/component/content/component';
import { TabsVerticalContentProps } from '@/components/collections/tabs/vertical/component/content/component.interface';
import { TabsVerticalHead } from '@/components/collections/tabs/vertical/component/head/component';
import { TabsVerticalHeadProps } from '@/components/collections/tabs/vertical/component/head/component.interface';
import { TabsVerticalHeadIndicator } from '@/components/collections/tabs/vertical/component/head/indicator/component';
import { TabsVerticalHeadIndicatorProps } from '@/components/collections/tabs/vertical/component/head/indicator/component.interface';
import { TabsVerticalHeadTab } from '@/components/collections/tabs/vertical/component/head/tab/component';
import { TabsVerticalHeadTabProps } from '@/components/collections/tabs/vertical/component/head/tab/component.interface';

export const TabsVertical = Object.assign(TabsVerticalComponent, {
  Head: Object.assign(TabsVerticalHead, {
    Tab: TabsVerticalHeadTab,
    Indicator: TabsVerticalHeadIndicator,
  }),
  Content: TabsVerticalContent,
});

export namespace TabsVertical {
  export type Props = TabsVerticalProps;

  export namespace Head {
    export type Props = TabsVerticalHeadProps;

    export namespace Tab {
      export type Props = TabsVerticalHeadTabProps;
    }

    export namespace Indicator {
      export type Props = TabsVerticalHeadIndicatorProps;
    }
  }

  export namespace Content {
    export type Props = TabsVerticalContentProps;
  }
}
