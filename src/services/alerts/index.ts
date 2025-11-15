import { alertsService } from './service';
import { AlertType } from './service.enums';
import type { Alert, AlertsServiceProps } from './service.interface';

export { alertsService, type Alert, type AlertsServiceProps };

export namespace AlertsService {
  export type Props = AlertsServiceProps;

  export const ENUMS = {
    Type: AlertType,
  };
}
