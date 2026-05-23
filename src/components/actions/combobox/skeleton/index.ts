import { ComboboxSkeleton as Component } from '@/components/actions/combobox/skeleton/.partials/components/component';
import { ComboboxSkeletonProps as ComponentProps } from '@/components/actions/combobox/skeleton/.partials/components/component.interface';
import { ComboboxFieldsetSkeleton } from '@/components/actions/combobox/skeleton/.partials/components/fieldset/component';
import { ComboboxFieldsetSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/fieldset/component.interface';
import { ComboboxFieldsetInputSkeleton } from '@/components/actions/combobox/skeleton/.partials/components/fieldset/input/component';
import { ComboboxFieldsetInputSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/fieldset/input/component.interface';
import { ComboboxFieldsetTriggerSkeleton } from '@/components/actions/combobox/skeleton/.partials/components/fieldset/trigger/component';
import { ComboboxFieldsetTriggerSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/fieldset/trigger/component.interface';
import { ComboboxPortalPositionerPopupSkeleton } from '@/components/actions/combobox/skeleton/.partials/components/portal/positioner/popup/component';
import { ComboboxPortalPositionerPopupSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/portal/positioner/popup/component.interface';
import { ComboboxPortalPositionerPopupListItemSkeleton } from '@/components/actions/combobox/skeleton/.partials/components/portal/positioner/popup/list/item/component';
import { ComboboxPortalPositionerPopupListItemSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/portal/positioner/popup/list/item/component.interface';
import { ComboboxPortalPositionerPopupListSkeleton } from '@/components/actions/combobox/skeleton/.partials/components/portal/positioner/popup/list/component';
import { ComboboxPortalPositionerPopupListSkeletonProps } from '@/components/actions/combobox/skeleton/.partials/components/portal/positioner/popup/list/component.interface';

export const ComboboxSkeleton = Object.assign(Component, {
  Fieldset: Object.assign(ComboboxFieldsetSkeleton, {
    Input: ComboboxFieldsetInputSkeleton,
    Trigger: ComboboxFieldsetTriggerSkeleton,
  }),
  Portal: {
    Positioner: {
      Popup: Object.assign(ComboboxPortalPositionerPopupSkeleton, {
        List: Object.assign(ComboboxPortalPositionerPopupListSkeleton, {
          Item: ComboboxPortalPositionerPopupListItemSkeleton,
        }),
      }),
    },
  },
});

export namespace ComboboxSkeleton {
  export type Props = ComponentProps;

  export namespace Fieldset {
    export type Props = ComboboxFieldsetSkeletonProps;

    export namespace Input {
      export type Props = ComboboxFieldsetInputSkeletonProps;
    }

    export namespace Trigger {
      export type Props = ComboboxFieldsetTriggerSkeletonProps;
    }
  }

  export namespace Portal {
    export namespace Positioner {
      export namespace Popup {
        export type Props = ComboboxPortalPositionerPopupSkeletonProps;

        export namespace List {
          export type Props = ComboboxPortalPositionerPopupListSkeletonProps;

          export namespace Item {
            export type Props = ComboboxPortalPositionerPopupListItemSkeletonProps;
          }
        }
      }
    }
  }
}
