import { Close } from '@/components/toast/.partials/components/close/component';
import { CloseProps } from '@/components/toast/.partials/components/close/component.interface';
import { ToastRoot } from '@/components/toast/.partials/components/component';
import type { ToastProps } from '@/components/toast/.partials/components/component.interface';

export const Toast = Object.assign(ToastRoot, {
  Close: Close,
});

export namespace Toast {
  export type Props = ToastProps;

  export namespace Close {
    export type Props = CloseProps;
  }
}
