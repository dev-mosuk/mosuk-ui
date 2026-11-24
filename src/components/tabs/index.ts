import { Tabs as Component } from '@/components/tabs/.partials/components/component';
import type { TabsProps as ComponentProps } from '@/components/tabs/.partials/components/component.interface';
import { TabsContent } from '@/components/tabs/.partials/components/content/component';
import type { TabsContentProps } from '@/components/tabs/.partials/components/content/component.interface';
import { TabsContentItem } from '@/components/tabs/.partials/components/content-item/component';
import type { TabsContentItemProps } from '@/components/tabs/.partials/components/content-item/component.interface';
import { TabsHeader } from '@/components/tabs/.partials/components/header/component';
import type { TabsHeaderProps } from '@/components/tabs/.partials/components/header/component.interface';
import { TabsHeaderIndicator } from '@/components/tabs/.partials/components/header-indicator/component';
import type { TabsHeaderIndicatorProps } from '@/components/tabs/.partials/components/header-indicator/component.interface';
import { TabsHeaderItem } from '@/components/tabs/.partials/components/header-item/component';
import type { TabsHeaderItemProps } from '@/components/tabs/.partials/components/header-item/component.interface';
import {
  TabsContentVariant,
  TabsOrientation,
  TabsVariant,
} from '@/components/tabs/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const Tabs = Object.assign(Component, {
  Header: Object.assign(TabsHeader, {
    Item: TabsHeaderItem,
    Indicator: TabsHeaderIndicator,
  }),
  Content: Object.assign(TabsContent, {
    Item: TabsContentItem,
    ENUMS: {
      Variant: TabsContentVariant,
    },
  }),
  ENUMS: {
    Orientation: TabsOrientation,
    Variant: TabsVariant,
  },
});

export namespace Tabs {
  export type Props<C extends ElementType = 'div'> = ComponentProps<C>;

  export namespace Header {
    export type Props<C extends ElementType = 'div'> = TabsHeaderProps<C>;

    export namespace Item {
      export type Props<C = 'button'> = TabsHeaderItemProps<C>;
    }

    export namespace Indicator {
      export type Props<C = 'figure'> = TabsHeaderIndicatorProps<C>;
    }
  }

  export namespace Content {
    export type Props = TabsContentProps;

    export namespace Item {
      export type Props = TabsContentItemProps;
    }
  }
}
