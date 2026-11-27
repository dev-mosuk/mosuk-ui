import { NavigationMenuArrow } from '@/components/navigation-menu/.partials/components/arrow/component';
import { NavigationMenuArrowProps } from '@/components/navigation-menu/.partials/components/arrow/component.interface';
import { NavigationMenuBackdrop } from '@/components/navigation-menu/.partials/components/backdrop/component';
import { NavigationMenuBackdropProps } from '@/components/navigation-menu/.partials/components/backdrop/component.interface';
import { NavigationMenu as Component } from '@/components/navigation-menu/.partials/components/component';
import { NavigationMenuProps as ComponentProps } from '@/components/navigation-menu/.partials/components/component.interface';
import { NavigationMenuContent } from '@/components/navigation-menu/.partials/components/content/component';
import { NavigationMenuContentProps } from '@/components/navigation-menu/.partials/components/content/component.interface';
import { NavigationMenuIcon } from '@/components/navigation-menu/.partials/components/icon/component';
import { NavigationMenuIconProps } from '@/components/navigation-menu/.partials/components/icon/component.interface';
import { NavigationMenuItem } from '@/components/navigation-menu/.partials/components/item/component';
import { NavigationMenuItemProps } from '@/components/navigation-menu/.partials/components/item/component.interface';
import { NavigationMenuLink } from '@/components/navigation-menu/.partials/components/link/component';
import { NavigationMenuLinkProps } from '@/components/navigation-menu/.partials/components/link/component.interface';
import { NavigationMenuList } from '@/components/navigation-menu/.partials/components/list/component';
import { NavigationMenuListProps } from '@/components/navigation-menu/.partials/components/list/component.interface';
import { NavigationMenuOpen } from '@/components/navigation-menu/.partials/components/open/component';
import { NavigationMenuOpenProps } from '@/components/navigation-menu/.partials/components/open/component.interface';
import { NavigationMenuOverviewPopup } from '@/components/navigation-menu/.partials/components/overview-popup/component';
import { NavigationMenuOverviewPopupProps } from '@/components/navigation-menu/.partials/components/overview-popup/component.interface';
import { NavigationMenuOverview } from '@/components/navigation-menu/.partials/components/overview/component';
import { NavigationMenuOverviewProps } from '@/components/navigation-menu/.partials/components/overview/component.interface';
import { NavigationMenuViewport } from '@/components/navigation-menu/.partials/components/viewport/component';
import { NavigationMenuViewportProps } from '@/components/navigation-menu/.partials/components/viewport/component.interface';
import { NavigationMenuVariant } from '@/components/navigation-menu/.partials/enums/component.enums';

export const NavigationMenu = Object.assign(Component, {
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Open: NavigationMenuOpen,
  Icon: NavigationMenuIcon,
  Content: NavigationMenuContent,
  Link: NavigationMenuLink,
  Overview: Object.assign(NavigationMenuOverview, {
    Popup: NavigationMenuOverviewPopup,
  }),
  Viewport: NavigationMenuViewport,
  Arrow: NavigationMenuArrow,
  Backdrop: NavigationMenuBackdrop,
  ENUMS: {
    Variant: NavigationMenuVariant,
  },
});

export namespace NavigationMenu {
  export type Props = ComponentProps;

  export namespace List {
    export type Props<C = 'ul'> =
      NavigationMenuListProps<C>;
  }

  export namespace Item {
    export type Props<C = 'li'> =
      NavigationMenuItemProps<C>;
  }

  export namespace Open {
    export type Props<C = 'button'> =
      NavigationMenuOpenProps<C>;
  }

  export namespace Icon {
    export type Props<C = 'span'> =
      NavigationMenuIconProps<C>;
  }

  export namespace Content {
    export type Props<C = 'div'> =
      NavigationMenuContentProps<C>;
  }

  export namespace Link {
    export type Props<C = 'a'> = NavigationMenuLinkProps<C>;
  }

  export namespace Overview {
    export type Props<C = 'div'> =
      NavigationMenuOverviewProps<C>;

    export namespace Popup {
      export type Props<C = 'nav'> =
        NavigationMenuOverviewPopupProps<C>;
    }
  }

  export namespace Viewport {
    export type Props<C = 'div'> =
      NavigationMenuViewportProps<C>;
  }

  export namespace Arrow {
    export type Props<C = 'div'> =
      NavigationMenuArrowProps<C>;
  }

  export namespace Backdrop {
    export type Props<C = 'div'> =
      NavigationMenuBackdropProps<C>;
  }
}
