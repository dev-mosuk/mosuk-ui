import { Close } from './close/component.js';
import { CloseProps } from './close/component.interface.js';
import { ToastRoot } from './component.js';
import type { ToastProps } from './component.interface.js';

export const Toast = Object.assign(ToastRoot, {
  Close: Close,
});

export namespace Toast {
  export type Props = ToastProps;

  export namespace Close {
    export type Props = CloseProps;
  }
}
