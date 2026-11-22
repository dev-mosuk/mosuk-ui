import type { TabsVariant } from '@/components/tabs/.partials/enums/component.enums';
import { Tabs } from '@base-ui/react/tabs';

export interface TabsProps extends Tabs.Root.Props {
  variant?: TabsVariant | `${TabsVariant}`;
}
