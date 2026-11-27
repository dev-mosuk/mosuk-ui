import { ContextMenu as Component } from '@/components/context-menu/.partials/components/component';
import { ContextMenuProps as ComponentProps } from '@/components/context-menu/.partials/components/component.interface';
import { ContextMenuOpen } from '@/components/context-menu/.partials/components/open/component';
import { ContextMenuOpenProps } from '@/components/context-menu/.partials/components/open/component.interface';
import { ContextMenuOverviewPopup } from '@/components/context-menu/.partials/components/overview-popup/component';
import { ContextMenuOverviewPopupProps } from '@/components/context-menu/.partials/components/overview-popup/component.interface';
import { ContextMenuOverview } from '@/components/context-menu/.partials/components/overview/component';
import { ContextMenuOverviewProps } from '@/components/context-menu/.partials/components/overview/component.interface';
import { ContextMenuSeparator } from '@/components/context-menu/.partials/components/separator/component';
import { ContextMenuSeparatorProps } from '@/components/context-menu/.partials/components/separator/component.interface';
import { ContextMenuVariant } from '@/components/context-menu/.partials/enums/component.enums';

export const ContextMenu = Object.assign(Component, {
  Open: ContextMenuOpen,
  Overview: Object.assign(ContextMenuOverview, {
    Popup: ContextMenuOverviewPopup,
  }),
  Separator: ContextMenuSeparator,
  ENUMS: {
    Variant: ContextMenuVariant,
  },
});

export namespace ContextMenu {
  export type Props = ComponentProps;

  export namespace Open {
    export type Props<C = 'div'> = ContextMenuOpenProps<C>;
  }

  export namespace Overview {
    export type Props<C = 'div'> = ContextMenuOverviewProps<C>;

    export namespace Popup {
      export type Props<C = 'div'> = ContextMenuOverviewPopupProps<C>;
    }
  }

  export namespace Separator {
    export type Props<C = 'div'> = ContextMenuSeparatorProps<C>;
  }
}
