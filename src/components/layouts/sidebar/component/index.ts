import { SidebarCardButton } from './card/button/component';
import { SidebarCardButtonProps } from './card/button/component.interface';
import { SidebarCard } from './card/component';
import { SidebarCardProps } from './card/component.interface';
import { Sidebar as BaseSidebar } from './component';
import type { SidebarProps } from './component.interface';

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
