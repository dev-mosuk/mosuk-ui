import { Specifications as Component } from '@/components/specifications/.partials/components/component';
import type { SpecificationsProps } from '@/components/specifications/.partials/components/component.interface';
import { SpecificationsItem } from '@/components/specifications/.partials/components/item/component';
import type { SpecificationsItemProps } from '@/components/specifications/.partials/components/item/component.interface';
import { SpecificationsItemSeparator } from '@/components/specifications/.partials/components/item-separator/component';
import type { SpecificationsItemSeparatorProps } from '@/components/specifications/.partials/components/item-separator/component.interface';
import { SpecificationsItemTerm } from '@/components/specifications/.partials/components/item-term/component';
import type { SpecificationsItemTermProps } from '@/components/specifications/.partials/components/item-term/component.interface';
import { SpecificationsItemValue } from '@/components/specifications/.partials/components/item-value/component';
import type { SpecificationsItemValueProps } from '@/components/specifications/.partials/components/item-value/component.interface';

export const Specifications = Object.assign(Component, {
  Item: Object.assign(SpecificationsItem, {
    Term: SpecificationsItemTerm,
    Separator: SpecificationsItemSeparator,
    Value: SpecificationsItemValue,
  }),
});

export namespace Specifications {
  export type Props = SpecificationsProps;

  export namespace Item {
    export type Props = SpecificationsItemProps;

    export namespace Term {
      export type Props = SpecificationsItemTermProps;
    }

    export namespace Separator {
      export type Props = SpecificationsItemSeparatorProps;
    }

    export namespace Value {
      export type Props = SpecificationsItemValueProps;
    }
  }
}
