import { Close } from '@/components/toast/.partials/components/close/component';
import { CloseProps } from '@/components/toast/.partials/components/close/component.interface';
import { ToastRoot } from '@/components/toast/.partials/components/component';
import type { ToastProps } from '@/components/toast/.partials/components/component.interface';
import { Item } from '@/components/toast/.partials/components/item/component';
import type { ToastItemProps } from '@/components/toast/.partials/components/item/component.interface';

export const Toast = Object.assign(ToastRoot, {
  Close: Close,
  Item: Item,
});

export namespace Toast {
  export type Props = ToastProps;

  export namespace Close {
    export type Props = CloseProps;
  }

  export namespace Item {
    export type Props = ToastItemProps;
  }
}
