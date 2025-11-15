import { Tabbar as BaseTabbar } from './component';
import type { TabbarProps } from './component.interface';
import { TabbarTabs } from './tabs/component';
import { TabbarTabsContext } from './tabs/context/component';
import { TabbarTabsContextProps } from './tabs/context/component.interface';
import { TabbarTabsIndicator } from './tabs/indicator/component';
import { TabbarTabsIndicatorProps } from './tabs/indicator/component.interface';
import { TabbarTabsTab } from './tabs/tab/component';
import { TabbarTabsTabProps } from './tabs/tab/component.interface';

export const Tabbar = Object.assign(BaseTabbar, {
  Tabs: Object.assign(TabbarTabs, {
    Context: TabbarTabsContext,
    Tab: TabbarTabsTab,
    Indicator: TabbarTabsIndicator,
  }),
});

export namespace Tabbar {
  export type Props = TabbarProps;

  export namespace Tabs {
    export type Props = TabbarTabsTabProps;

    export namespace Context {
      export type Props = TabbarTabsContextProps;
    }

    export namespace Tab {
      export type Props = TabbarTabsTabProps;
    }

    export namespace Indicator {
      export type Props = TabbarTabsIndicatorProps;
    }
  }
}
