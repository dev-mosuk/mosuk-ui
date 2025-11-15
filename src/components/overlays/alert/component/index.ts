import { Close } from './close/component';
import { CloseProps } from './close/component.interface';
import {
  Alert as BaseAlert
} from './component';
import type { AlertProps } from './component.interface';

export const Alert = Object.assign(BaseAlert, {
  Close: Close
});

export namespace Alert {
  export type Props = AlertProps;

  export namespace Close {
    export type Props = CloseProps;
  }
}
