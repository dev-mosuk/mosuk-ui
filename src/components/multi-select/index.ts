import { MultiSelect as Component } from '@/components/multi-select/.partials/components/component';
import type { MultiSelectProps } from '@/components/multi-select/.partials/components/component.interface';
import { MultiSelectChip } from '@/components/multi-select/.partials/components/chip/component';
import type { MultiSelectChipProps } from '@/components/multi-select/.partials/components/chip/component.interface';
import { MultiSelectChips } from '@/components/multi-select/.partials/components/chips/component';
import type { MultiSelectChipsProps } from '@/components/multi-select/.partials/components/chips/component.interface';
import { MultiSelectInput } from '@/components/multi-select/.partials/components/input/component';
import type { MultiSelectInputProps } from '@/components/multi-select/.partials/components/input/component.interface';
import { MultiSelectOpen } from '@/components/multi-select/.partials/components/open/component';
import type { MultiSelectOpenProps } from '@/components/multi-select/.partials/components/open/component.interface';
import { MultiSelectPopover } from '@/components/multi-select/.partials/components/popover/component';
import type { MultiSelectPopoverProps } from '@/components/multi-select/.partials/components/popover/component.interface';
import { useMultiSelect as BaseUseMultiSelect } from '@/components/multi-select/.partials/hooks/hook';
import type { UseMultiSelectProps } from '@/components/multi-select/.partials/hooks/hook.interface';

export const MultiSelect = Object.assign(Component, {
  Open: MultiSelectOpen,
  Input: MultiSelectInput,
  Chips: Object.assign(MultiSelectChips, {
    Chip: MultiSelectChip,
  }),
  Popover: MultiSelectPopover,
});

export namespace MultiSelect {
  export type Props = MultiSelectProps;

  export namespace Open {
    export type Props = MultiSelectOpenProps;
  }

  export namespace Input {
    export type Props = MultiSelectInputProps;
  }

  export namespace Chips {
    export type Props = MultiSelectChipsProps;

    export namespace Chip {
      export type Props = MultiSelectChipProps;
    }
  }

  export namespace Popover {
    export type Props = MultiSelectPopoverProps;
  }
}

export const useMultiSelect = BaseUseMultiSelect;

export namespace useMultiSelect {
  export type Props = UseMultiSelectProps;
}
