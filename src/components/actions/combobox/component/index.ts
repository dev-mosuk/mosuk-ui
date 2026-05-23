import { ComboboxArrow } from '@/components/actions/combobox/component/.partials/components/arrow/component';
import { ComboboxArrowProps } from '@/components/actions/combobox/component/.partials/components/arrow/component.interface';
import { ComboboxBackdrop } from '@/components/actions/combobox/component/.partials/components/backdrop/component';
import { ComboboxBackdropProps } from '@/components/actions/combobox/component/.partials/components/backdrop/component.interface';
import { ComboboxChipRemove } from '@/components/actions/combobox/component/.partials/components/chip-remove/component';
import { ComboboxChipRemoveProps } from '@/components/actions/combobox/component/.partials/components/chip-remove/component.interface';
import { ComboboxChip } from '@/components/actions/combobox/component/.partials/components/chip/component';
import { ComboboxChipProps } from '@/components/actions/combobox/component/.partials/components/chip/component.interface';
import { ComboboxChips } from '@/components/actions/combobox/component/.partials/components/chips/component';
import { ComboboxChipsProps } from '@/components/actions/combobox/component/.partials/components/chips/component.interface';
import { ComboboxClear } from '@/components/actions/combobox/component/.partials/components/clear/component';
import { ComboboxClearProps } from '@/components/actions/combobox/component/.partials/components/clear/component.interface';
import { ComboboxCollection } from '@/components/actions/combobox/component/.partials/components/collection/component';
import { ComboboxCollectionProps } from '@/components/actions/combobox/component/.partials/components/collection/component.interface';
import { Combobox as Component } from '@/components/actions/combobox/component/.partials/components/component';
import { ComboboxProps } from '@/components/actions/combobox/component/.partials/components/component.interface';
import { ComboboxGroupLabel } from '@/components/actions/combobox/component/.partials/components/group-label/component';
import { ComboboxGroupLabelProps } from '@/components/actions/combobox/component/.partials/components/group-label/component.interface';
import { ComboboxGroup } from '@/components/actions/combobox/component/.partials/components/group/component';
import { ComboboxGroupProps } from '@/components/actions/combobox/component/.partials/components/group/component.interface';
import { ComboboxIcon } from '@/components/actions/combobox/component/.partials/components/icon/component';
import { ComboboxIconProps } from '@/components/actions/combobox/component/.partials/components/icon/component.interface';
import { ComboboxInputGroup } from '@/components/actions/combobox/component/.partials/components/input-group/component';
import { ComboboxInputGroupProps } from '@/components/actions/combobox/component/.partials/components/input-group/component.interface';
import { ComboboxInput } from '@/components/actions/combobox/component/.partials/components/input/component';
import { ComboboxInputProps } from '@/components/actions/combobox/component/.partials/components/input/component.interface';
import { ComboboxItem } from '@/components/actions/combobox/component/.partials/components/item/component';
import { ComboboxItemProps } from '@/components/actions/combobox/component/.partials/components/item/component.interface';
import { ComboboxItemIndicator } from '@/components/actions/combobox/component/.partials/components/item/indicator/component';
import { ComboboxItemIndicatorProps } from '@/components/actions/combobox/component/.partials/components/item/indicator/component.interface';
import { ComboboxList } from '@/components/actions/combobox/component/.partials/components/list/component';
import { ComboboxListProps } from '@/components/actions/combobox/component/.partials/components/list/component.interface';
import { ComboboxPortal } from '@/components/actions/combobox/component/.partials/components/portal/component';
import { ComboboxPortalProps } from '@/components/actions/combobox/component/.partials/components/portal/component.interface';
import { ComboboxPortalPositioner } from '@/components/actions/combobox/component/.partials/components/portal/positioner/component';
import { ComboboxPortalPositionerProps } from '@/components/actions/combobox/component/.partials/components/portal/positioner/component.interface';
import { ComboboxPortalPositionerPopup } from '@/components/actions/combobox/component/.partials/components/portal/positioner/popup/component';
import { ComboboxPortalPositionerPopupProps } from '@/components/actions/combobox/component/.partials/components/portal/positioner/popup/component.interface';
import { ComboboxPortalPositionerPopupEmpty } from '@/components/actions/combobox/component/.partials/components/portal/positioner/popup/empty/component';
import { ComboboxPortalPositionerPopupEmptyProps } from '@/components/actions/combobox/component/.partials/components/portal/positioner/popup/empty/component.interface';
import { ComboboxPortalPositionerPopupStatus } from '@/components/actions/combobox/component/.partials/components/portal/positioner/popup/status/component';
import { ComboboxPortalPositionerPopupStatusProps } from '@/components/actions/combobox/component/.partials/components/portal/positioner/popup/status/component.interface';
import { ComboboxRow } from '@/components/actions/combobox/component/.partials/components/row/component';
import { ComboboxRowProps } from '@/components/actions/combobox/component/.partials/components/row/component.interface';
import { ComboboxSeparator } from '@/components/actions/combobox/component/.partials/components/separator/component';
import { ComboboxSeparatorProps } from '@/components/actions/combobox/component/.partials/components/separator/component.interface';
import { ComboboxTrigger } from '@/components/actions/combobox/component/.partials/components/trigger/component';
import { ComboboxTriggerProps } from '@/components/actions/combobox/component/.partials/components/trigger/component.interface';
import { ComboboxValue } from '@/components/actions/combobox/component/.partials/components/value/component';
import { ComboboxValueProps } from '@/components/actions/combobox/component/.partials/components/value/component.interface';
import type {
  ComboboxFilter,
  ComboboxFilterOptions,
} from '@base-ui/react/combobox';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';

export const Combobox = Object.assign(Component, {
  Value: ComboboxValue,
  Input: ComboboxInput,
  InputGroup: ComboboxInputGroup,
  Trigger: ComboboxTrigger,
  Clear: ComboboxClear,
  Icon: ComboboxIcon,
  Chips: ComboboxChips,
  Chip: ComboboxChip,
  ChipRemove: ComboboxChipRemove,
  Portal: Object.assign(ComboboxPortal, {
    Positioner: Object.assign(ComboboxPortalPositioner, {
      Popup: Object.assign(ComboboxPortalPositionerPopup, {
        Status: ComboboxPortalPositionerPopupStatus,
        Empty: ComboboxPortalPositionerPopupEmpty,
      }),
    }),
  }),
  Backdrop: ComboboxBackdrop,
  Arrow: ComboboxArrow,
  List: ComboboxList,
  Row: ComboboxRow,
  Item: Object.assign(ComboboxItem, {
    Indicator: ComboboxItemIndicator,
  }),
  Group: ComboboxGroup,
  GroupLabel: ComboboxGroupLabel,
  Collection: ComboboxCollection,
  Separator: ComboboxSeparator,
  useFilter: ComboboxPrimitive.useFilter,
  useFilteredItems: ComboboxPrimitive.useFilteredItems,
});

export namespace Combobox {
  export type Props<
    Value,
    Multiple extends boolean | undefined = false,
  > = ComboboxProps<Value, Multiple>;

  export namespace Value {
    export type Props = ComboboxValueProps;
  }

  export namespace Input {
    export type Props = ComboboxInputProps;
  }

  export namespace InputGroup {
    export type Props = ComboboxInputGroupProps;
  }

  export namespace Trigger {
    export type Props = ComboboxTriggerProps;
  }

  export namespace Clear {
    export type Props = ComboboxClearProps;
  }

  export namespace Icon {
    export type Props = ComboboxIconProps;
  }

  export namespace Chips {
    export type Props = ComboboxChipsProps;
  }

  export namespace Chip {
    export type Props = ComboboxChipProps;
  }

  export namespace ChipRemove {
    export type Props = ComboboxChipRemoveProps;
  }

  export namespace Portal {
    export type Props = ComboboxPortalProps;

    export namespace Positioner {
      export type Props = ComboboxPortalPositionerProps;

      export namespace Popup {
        export type Props = ComboboxPortalPositionerPopupProps;

        export namespace Status {
          export type Props = ComboboxPortalPositionerPopupStatusProps;
        }

        export namespace Empty {
          export type Props = ComboboxPortalPositionerPopupEmptyProps;
        }
      }
    }
  }

  export namespace Backdrop {
    export type Props = ComboboxBackdropProps;
  }

  export namespace Arrow {
    export type Props = ComboboxArrowProps;
  }

  export namespace List {
    export type Props = ComboboxListProps;
  }

  export namespace Row {
    export type Props = ComboboxRowProps;
  }

  export namespace Item {
    export type Props = ComboboxItemProps;

    export namespace Indicator {
      export type Props = ComboboxItemIndicatorProps;
    }
  }

  export namespace Group {
    export type Props = ComboboxGroupProps;
  }

  export namespace GroupLabel {
    export type Props = ComboboxGroupLabelProps;
  }

  export namespace Collection {
    export type Props = ComboboxCollectionProps;
  }

  export namespace Separator {
    export type Props = ComboboxSeparatorProps;
  }

  export type Filter = ComboboxFilter;
  export type FilterOptions = ComboboxFilterOptions;
}
