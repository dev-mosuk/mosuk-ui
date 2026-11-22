import { Dropdown as Component } from '@/components/dropdown/.partials/components/component';
import { DropdownProps as ComponentProps } from '@/components/dropdown/.partials/components/component.interface';
import { DropdownClose } from '@/components/dropdown/.partials/components/close/component';
import { DropdownCloseProps } from '@/components/dropdown/.partials/components/close/component.interface';
import { DropdownOpen } from '@/components/dropdown/.partials/components/open/component';
import { DropdownOpenProps } from '@/components/dropdown/.partials/components/open/component.interface';
import { DropdownOverview } from '@/components/dropdown/.partials/components/overview/component';
import { DropdownOverviewProps } from '@/components/dropdown/.partials/components/overview/component.interface';
import { DropdownOverviewPopup } from '@/components/dropdown/.partials/components/overview-popup/component';
import { DropdownOverviewPopupProps } from '@/components/dropdown/.partials/components/overview-popup/component.interface';

export const Dropdown = Object.assign(Component, {
  Open: DropdownOpen,
  Close: DropdownClose,
  Overview: Object.assign(DropdownOverview, {
    Popup: DropdownOverviewPopup,
  }),
});

export namespace Dropdown {
  export type Props = ComponentProps;

  export namespace Open {
    export type Props = DropdownOpenProps;
  }

  export namespace Close {
    export type Props = DropdownCloseProps;
  }

  export namespace Overview {
    export type Props = DropdownOverviewProps;

    export namespace Popup {
      export type Props = DropdownOverviewPopupProps;
    }
  }
}
