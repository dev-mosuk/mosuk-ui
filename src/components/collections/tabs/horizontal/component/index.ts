import { TabsHorizontal as TabsHorizontalComponent } from '@/components/collections/tabs/horizontal/component/component';
import { TabsHorizontalProps } from '@/components/collections/tabs/horizontal/component/component.interface';
import { TabsHorizontalContent } from '@/components/collections/tabs/horizontal/component/content/component';
import { TabsHorizontalContentProps } from '@/components/collections/tabs/horizontal/component/content/component.interface';
import { TabsHorizontalHead } from '@/components/collections/tabs/horizontal/component/head/component';
import { TabsHorizontalHeadProps } from '@/components/collections/tabs/horizontal/component/head/component.interface';
import { TabsHorizontalHeadIndicator } from '@/components/collections/tabs/horizontal/component/head/indicator/component';
import { TabsHorizontalHeadIndicatorProps } from '@/components/collections/tabs/horizontal/component/head/indicator/component.interface';
import { TabsHorizontalHeadTab } from '@/components/collections/tabs/horizontal/component/head/tab/component';
import { TabsHorizontalHeadTabProps } from '@/components/collections/tabs/horizontal/component/head/tab/component.interface';

export const TabsHorizontal = Object.assign(TabsHorizontalComponent, {
  Head: Object.assign(TabsHorizontalHead, {
    Tab: TabsHorizontalHeadTab,
    Indicator: TabsHorizontalHeadIndicator,
  }),
  Content: TabsHorizontalContent,
});

export namespace TabsHorizontal {
  export type Props = TabsHorizontalProps;

  export namespace Head {
    export type Props = TabsHorizontalHeadProps;

    export namespace Tab {
      export type Props = TabsHorizontalHeadTabProps;
    }

    export namespace Indicator {
      export type Props = TabsHorizontalHeadIndicatorProps;
    }
  }

  export namespace Content {
    export type Props = TabsHorizontalContentProps;
  }
}
