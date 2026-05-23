import { ComboboxSkeleton as Component } from '@/components/actions/combobox/skeleton/.partials/components/component';
import { ComboboxSkeletonProps as ComponentProps } from '@/components/actions/combobox/skeleton/.partials/components/component.interface';
import { ComboboxInputGroupSkeleton } from '@/components/actions/combobox/skeleton/.partials/components/input-group/component';
import { ComboboxInputGroupSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/input-group/component.interface';
import { ComboboxInputSkeleton } from '@/components/actions/combobox/skeleton/.partials/components/input/component';
import { ComboboxInputSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/input/component.interface';
import { ComboboxItemSkeleton } from '@/components/actions/combobox/skeleton/.partials/components/item/component';
import { ComboboxItemSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/item/component.interface';
import { ComboboxListSkeleton } from '@/components/actions/combobox/skeleton/.partials/components/list/component';
import { ComboboxListSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/list/component.interface';
import { ComboboxPopupSkeleton } from '@/components/actions/combobox/skeleton/.partials/components/popup/component';
import { ComboboxPopupSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/popup/component.interface';
import { ComboboxTriggerSkeleton } from '@/components/actions/combobox/skeleton/.partials/components/trigger/component';
import { ComboboxTriggerSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/trigger/component.interface';

export const ComboboxSkeleton = Object.assign(Component, {
  InputGroup: ComboboxInputGroupSkeleton,
  Input: ComboboxInputSkeleton,
  Trigger: ComboboxTriggerSkeleton,
  Popup: ComboboxPopupSkeleton,
  List: ComboboxListSkeleton,
  Item: ComboboxItemSkeleton,
});

export namespace ComboboxSkeleton {
  export type Props = ComponentProps;

  export namespace InputGroup {
    export type Props = ComboboxInputGroupSkeletonProps;
  }

  export namespace Input {
    export type Props = ComboboxInputSkeletonProps;
  }

  export namespace Trigger {
    export type Props = ComboboxTriggerSkeletonProps;
  }

  export namespace Popup {
    export type Props = ComboboxPopupSkeletonProps;
  }

  export namespace List {
    export type Props = ComboboxListSkeletonProps;
  }

  export namespace Item {
    export type Props = ComboboxItemSkeletonProps;
  }
}
