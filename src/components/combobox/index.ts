import { Combobox as Component } from '@/components/combobox/.partials/components/component';
import type { ComboboxProps } from '@/components/combobox/.partials/components/component.interface';
import { ComboboxOpen } from '@/components/combobox/.partials/components/open/component';
import type { ComboboxOpenProps } from '@/components/combobox/.partials/components/open/component.interface';
import { ComboboxOverview } from '@/components/combobox/.partials/components/overview/component';
import type { ComboboxOverviewProps } from '@/components/combobox/.partials/components/overview/component.interface';
import { ComboboxOverviewPopup } from '@/components/combobox/.partials/components/overview-popup/component';
import type { ComboboxOverviewPopupProps } from '@/components/combobox/.partials/components/overview-popup/component.interface';
import { useCombobox as BaseUseCombobox } from '@/components/combobox/.partials/hooks/hook';
import type { UseComboboxProps } from '@/components/combobox/.partials/hooks/hook.interface';

export const Combobox = Object.assign(Component, {
  Open: ComboboxOpen,
  Overview: Object.assign(ComboboxOverview, {
    Popup: ComboboxOverviewPopup,
  }),
});

export namespace Combobox {
  export type Props = ComboboxProps;

  export namespace Open {
    export type Props = ComboboxOpenProps;
  }

  export namespace Overview {
    export type Props = ComboboxOverviewProps;

    export namespace Popup {
      export type Props = ComboboxOverviewPopupProps;
    }
  }
}

export const useCombobox = BaseUseCombobox;

export namespace useCombobox {
  export type Props = UseComboboxProps;
}
