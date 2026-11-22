import { AutocompleteClear } from '@/components/autocomplete/.partials/components/clear/component';
import type { AutocompleteClearProps } from '@/components/autocomplete/.partials/components/clear/component.interface';
import { Autocomplete as Component } from '@/components/autocomplete/.partials/components/component';
import type { AutocompleteProps } from '@/components/autocomplete/.partials/components/component.interface';
import { AutocompleteFilter } from '@/components/autocomplete/.partials/components/filter/component';
import type { AutocompleteFilterProps } from '@/components/autocomplete/.partials/components/filter/component.interface';
import { AutocompleteIndicator } from '@/components/autocomplete/.partials/components/indicator/component';
import type { AutocompleteIndicatorProps } from '@/components/autocomplete/.partials/components/indicator/component.interface';
import { AutocompleteOpen } from '@/components/autocomplete/.partials/components/open/component';
import type { AutocompleteOpenProps } from '@/components/autocomplete/.partials/components/open/component.interface';
import { AutocompleteOverviewPopup } from '@/components/autocomplete/.partials/components/overview-popup/component';
import type { AutocompleteOverviewPopupProps } from '@/components/autocomplete/.partials/components/overview-popup/component.interface';
import { AutocompleteOverview } from '@/components/autocomplete/.partials/components/overview/component';
import type { AutocompleteOverviewProps } from '@/components/autocomplete/.partials/components/overview/component.interface';
import { AutocompleteValue } from '@/components/autocomplete/.partials/components/value/component';
import type { AutocompleteValueProps } from '@/components/autocomplete/.partials/components/value/component.interface';
import { useAutocomplete as BaseUseAutocomplete } from '@/components/autocomplete/.partials/hooks/hook';
import type { UseAutocompleteProps } from '@/components/autocomplete/.partials/hooks/hook.interface';

export const Autocomplete = Object.assign(Component, {
  Open: AutocompleteOpen,
  Overview: Object.assign(AutocompleteOverview, {
    Popup: AutocompleteOverviewPopup,
  }),
  Value: AutocompleteValue,
  Clear: AutocompleteClear,
  Indicator: AutocompleteIndicator,
  Filter: AutocompleteFilter,
});

export namespace Autocomplete {
  export type Props = AutocompleteProps;

  export namespace Open {
    export type Props = AutocompleteOpenProps;
  }

  export namespace Overview {
    export type Props = AutocompleteOverviewProps;

    export namespace Popup {
      export type Props = AutocompleteOverviewPopupProps;
    }
  }

  export namespace Value {
    export type Props = AutocompleteValueProps;
  }

  export namespace Clear {
    export type Props = AutocompleteClearProps;
  }

  export namespace Indicator {
    export type Props = AutocompleteIndicatorProps;
  }

  export namespace Filter {
    export type Props = AutocompleteFilterProps;
  }
}

export const useAutocomplete = BaseUseAutocomplete;

export namespace useAutocomplete {
  export type Props = UseAutocompleteProps;
}
