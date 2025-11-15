import { TabsHorizontal as TabsHorizontalComponent } from './component';
import { TabsHorizontalProps } from './component.interface';
import { TabsHorizontalContent } from './content/component';
import { TabsHorizontalContentProps } from './content/component.interface';
import { TabsHorizontalHead } from './head/component';
import { TabsHorizontalHeadProps } from './head/component.interface';
import { TabsHorizontalHeadIndicator } from './head/indicator/component';
import { TabsHorizontalHeadIndicatorProps } from './head/indicator/component.interface';
import { TabsHorizontalHeadTab } from './head/tab/component';
import { TabsHorizontalHeadTabProps } from './head/tab/component.interface';

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
