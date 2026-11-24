import { Select as Component } from '@/components/select/.partials/components/component';
import type { SelectProps } from '@/components/select/.partials/components/component.interface';
import { SelectInput } from '@/components/select/.partials/components/input/component';
import type { SelectInputProps } from '@/components/select/.partials/components/input/component.interface';
import { SelectOpen } from '@/components/select/.partials/components/open/component';
import type { SelectOpenProps } from '@/components/select/.partials/components/open/component.interface';
import { SelectPopover } from '@/components/select/.partials/components/popover/component';
import type { SelectPopoverProps } from '@/components/select/.partials/components/popover/component.interface';
import { SelectMode } from '@/components/select/.partials/enums/component.enums';
import { useSelect as BaseUseSelect } from '@/components/select/.partials/hooks/hook';
import type { UseSelectProps } from '@/components/select/.partials/hooks/hook.interface';

export const Select = Object.assign(Component, {
  Open: SelectOpen,
  Input: SelectInput,
  Popover: SelectPopover,
  ENUMS: {
    Mode: SelectMode,
  },
});

export namespace Select {
  export type Props = SelectProps;

  export namespace Open {
    export type Props = SelectOpenProps;
  }

  export namespace Input {
    export type Props = SelectInputProps;
  }

  export namespace Popover {
    export type Props = SelectPopoverProps;
  }
}

export const useSelect = BaseUseSelect;

export namespace useSelect {
  export type Props = UseSelectProps;
}
