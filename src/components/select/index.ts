import { SelectClear } from '@/components/select/.partials/components/clear/component';
import { SelectClearProps } from '@/components/select/.partials/components/clear/component.interface';
import { Select as Component } from '@/components/select/.partials/components/component';
import { SelectProps } from '@/components/select/.partials/components/component.interface';
import { SelectGroupLabel } from '@/components/select/.partials/components/group-label/component';
import { SelectGroupLabelProps } from '@/components/select/.partials/components/group-label/component.interface';
import { SelectGroup } from '@/components/select/.partials/components/group/component';
import { SelectGroupProps } from '@/components/select/.partials/components/group/component.interface';
import { SelectIndicator } from '@/components/select/.partials/components/indicator/component';
import { SelectIndicatorProps } from '@/components/select/.partials/components/indicator/component.interface';
import { SelectItemIndicator } from '@/components/select/.partials/components/item-indicator/component';
import { SelectItemIndicatorProps } from '@/components/select/.partials/components/item-indicator/component.interface';
import { SelectItem } from '@/components/select/.partials/components/item/component';
import { SelectItemProps } from '@/components/select/.partials/components/item/component.interface';
import { SelectList } from '@/components/select/.partials/components/list/component';
import { SelectListProps } from '@/components/select/.partials/components/list/component.interface';
import { SelectPopover } from '@/components/select/.partials/components/popover/component';
import { SelectPopoverProps } from '@/components/select/.partials/components/popover/component.interface';
import { SelectSeparator } from '@/components/select/.partials/components/separator/component';
import { SelectSeparatorProps } from '@/components/select/.partials/components/separator/component.interface';
import { SelectTrigger } from '@/components/select/.partials/components/trigger/component';
import { SelectTriggerProps } from '@/components/select/.partials/components/trigger/component.interface';
import { SelectValue } from '@/components/select/.partials/components/value/component';
import { SelectValueProps } from '@/components/select/.partials/components/value/component.interface';

export const Select = Object.assign(Component, {
  Trigger: SelectTrigger,
  Value: SelectValue,
  Clear: SelectClear,
  Indicator: SelectIndicator,
  Popover: SelectPopover,
  List: SelectList,
  Item: Object.assign(SelectItem, {
    Indicator: SelectItemIndicator,
  }),
  Group: Object.assign(SelectGroup, {
    Label: SelectGroupLabel,
  }),
  Separator: SelectSeparator,
});

export namespace Select {
  export type Props<
    Value,
    Multiple extends boolean | undefined = false,
  > = SelectProps<Value, Multiple>;

  export namespace Trigger {
    export type Props = SelectTriggerProps;
  }

  export namespace Value {
    export type Props = SelectValueProps;
  }

  export namespace Clear {
    export type Props = SelectClearProps;
  }

  export namespace Indicator {
    export type Props = SelectIndicatorProps;
  }

  export namespace Popover {
    export type Props = SelectPopoverProps;
  }

  export namespace List {
    export type Props = SelectListProps;
  }

  export namespace Item {
    export type Props = SelectItemProps;

    export namespace Indicator {
      export type Props = SelectItemIndicatorProps;
    }
  }

  export namespace Group {
    export type Props = SelectGroupProps;

    export namespace Label {
      export type Props = SelectGroupLabelProps;
    }
  }

  export namespace Separator {
    export type Props = SelectSeparatorProps;
  }
}
