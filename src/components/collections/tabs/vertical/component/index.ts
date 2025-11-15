import { TabsVertical as TabsVerticalComponent } from './component';
import { TabsVerticalProps } from './component.interface';
import { TabsVerticalContent } from './content/component';
import { TabsVerticalContentProps } from './content/component.interface';
import { TabsVerticalHead } from './head/component';
import { TabsVerticalHeadProps } from './head/component.interface';
import { TabsVerticalHeadIndicator } from './head/indicator/component';
import { TabsVerticalHeadIndicatorProps } from './head/indicator/component.interface';
import { TabsVerticalHeadTab } from './head/tab/component';
import { TabsVerticalHeadTabProps } from './head/tab/component.interface';

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
