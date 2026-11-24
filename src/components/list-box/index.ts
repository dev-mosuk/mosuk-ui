import { ListBox as Component } from '@/components/list-box/.partials/components/component';
import type { ListBoxProps } from '@/components/list-box/.partials/components/component.interface';
import { ListBoxItemIndicator } from '@/components/list-box/.partials/components/item-indicator/component';
import type { ListBoxItemIndicatorProps } from '@/components/list-box/.partials/components/item-indicator/component.interface';
import { ListBoxItem } from '@/components/list-box/.partials/components/item/component';
import type { ListBoxItemProps } from '@/components/list-box/.partials/components/item/component.interface';
import {
  ListBoxMode,
  ListBoxVariant,
} from '@/components/list-box/.partials/enums/component.enums';
import { useListBox as BaseUseListBox } from '@/components/list-box/.partials/hooks/hook';
import type { UseListBoxProps } from '@/components/list-box/.partials/hooks/hook.interface';

export const ListBox = Object.assign(Component, {
  Item: Object.assign(ListBoxItem, {
    Indicator: ListBoxItemIndicator,
  }),
  ENUMS: {
    Mode: ListBoxMode,
    Variant: ListBoxVariant,
  },
});

export namespace ListBox {
  export type Props = ListBoxProps;

  export namespace Item {
    export type Props = ListBoxItemProps;

    export namespace Indicator {
      export type Props = ListBoxItemIndicatorProps;
    }
  }
}

export const useListBox = BaseUseListBox;

export namespace useListBox {
  export type Props = UseListBoxProps;
}
