import { Close } from '@/components/overlays/alert/component/close/component';
import { CloseProps } from '@/components/overlays/alert/component/close/component.interface';
import { Alert as BaseAlert } from '@/components/overlays/alert/component/component';
import type { AlertProps } from '@/components/overlays/alert/component/component.interface';

export const Alert = Object.assign(BaseAlert, {
  Close: Close,
});

export namespace Alert {
  export type Props = AlertProps;

  export namespace Close {
    export type Props = CloseProps;
  }
}
