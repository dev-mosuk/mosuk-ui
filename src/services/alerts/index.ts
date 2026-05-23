import { alertsService } from '@/services/alerts/service';
import { AlertType } from '@/services/alerts/service.enums';
import type {
  Alert,
  AlertsServiceProps,
} from '@/services/alerts/service.interface';

export { alertsService, type Alert, type AlertsServiceProps };

export namespace AlertsService {
  export type Props = AlertsServiceProps;

  export const ENUMS = {
    Type: AlertType,
  };
}
