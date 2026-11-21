import { Tabs as Component } from '@/components/tabs/.partials/components/component';
import { TabsProps as ComponentProps } from '@/components/tabs/.partials/components/component.interface';
import { TabsIndicator } from '@/components/tabs/.partials/components/indicator/component';
import { TabsIndicatorProps } from '@/components/tabs/.partials/components/indicator/component.interface';
import { TabsList } from '@/components/tabs/.partials/components/list/component';
import { TabsListProps } from '@/components/tabs/.partials/components/list/component.interface';
import { TabsPanel } from '@/components/tabs/.partials/components/panel/component';
import { TabsPanelProps } from '@/components/tabs/.partials/components/panel/component.interface';
import { TabsTab } from '@/components/tabs/.partials/components/tab/component';
import { TabsTabProps } from '@/components/tabs/.partials/components/tab/component.interface';
import { TabsVariant } from '@/components/tabs/.partials/enums/component.enums';

export const Tabs = Object.assign(Component, {
  List: TabsList,
  Tab: TabsTab,
  Indicator: TabsIndicator,
  Panel: TabsPanel,
  ENUMS: {
    Variant: TabsVariant,
  },
});

export namespace Tabs {
  export type Props = ComponentProps;

  export namespace List {
    export type Props = TabsListProps;
  }

  export namespace Tab {
    export type Props = TabsTabProps;
  }

  export namespace Indicator {
    export type Props = TabsIndicatorProps;
  }

  export namespace Panel {
    export type Props = TabsPanelProps;
  }
}
