import { PopoverClose } from '@/components/popover/.partials/components/close/component';
import { PopoverCloseProps } from '@/components/popover/.partials/components/close/component.interface';
import { Popover as Component } from '@/components/popover/.partials/components/component';
import { PopoverProps as ComponentProps } from '@/components/popover/.partials/components/component.interface';
import { PopoverOpen } from '@/components/popover/.partials/components/open/component';
import { PopoverOpenProps } from '@/components/popover/.partials/components/open/component.interface';
import { PopoverOverviewPopup } from '@/components/popover/.partials/components/overview-popup/component';
import { PopoverOverviewPopupProps } from '@/components/popover/.partials/components/overview-popup/component.interface';
import { PopoverOverview } from '@/components/popover/.partials/components/overview/component';
import { PopoverOverviewProps } from '@/components/popover/.partials/components/overview/component.interface';
import { PopoverVariant } from '@/components/popover/.partials/enums/component.enums';

export const Popover = Object.assign(Component, {
  Open: PopoverOpen,
  Close: PopoverClose,
  Overview: Object.assign(PopoverOverview, {
    Popup: PopoverOverviewPopup,
  }),
  ENUMS: {
    Variant: PopoverVariant,
  },
});

export namespace Popover {
  export type Props = ComponentProps;

  export namespace Open {
    export type Props<C = 'button'> = PopoverOpenProps<C>;
  }

  export namespace Close {
    export type Props<C = 'button'> = PopoverCloseProps<C>;
  }

  export namespace Overview {
    export type Props<C = 'div'> = PopoverOverviewProps<C>;

    export namespace Popup {
      export type Props<C = 'div'> = PopoverOverviewPopupProps<C>;
    }
  }
}
