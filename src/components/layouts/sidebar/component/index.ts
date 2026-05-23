import { SidebarCardButton } from '@/components/layouts/sidebar/component/card/button/component';
import { SidebarCardButtonProps } from '@/components/layouts/sidebar/component/card/button/component.interface';
import { SidebarCard } from '@/components/layouts/sidebar/component/card/component';
import { SidebarCardProps } from '@/components/layouts/sidebar/component/card/component.interface';
import { Sidebar as BaseSidebar } from '@/components/layouts/sidebar/component/component';
import type { SidebarProps } from '@/components/layouts/sidebar/component/component.interface';

export const Sidebar = Object.assign(BaseSidebar, {
  Card: Object.assign(SidebarCard, {
    Button: SidebarCardButton,
  }),
});

export namespace Sidebar {
  export type Props = SidebarProps;

  export namespace Card {
    export type Props = SidebarCardProps;

    export namespace Button {
      export type Props = SidebarCardButtonProps;
    }
  }
}
