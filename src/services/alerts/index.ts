import {
  AlertActionVariant,
  AlertType,
} from '@/services/alerts/service.enums';
import type {
  Alert,
  AlertActionProps,
  AlertData,
  AlertIndicator,
  AlertOptions,
  AlertsServiceProps,
  ToastApi,
} from '@/services/alerts/service.interface';
import { alertsService } from '@/services/alerts/service';

export const toast: ToastApi = alertsService;

export {
  alertsService,
  type Alert,
  type AlertActionProps,
  type AlertData,
  type AlertIndicator,
  type AlertOptions,
  type AlertsServiceProps,
  type ToastApi,
};

export namespace AlertsService {
  export type Props = AlertsServiceProps;

  export const ENUMS = {
    Type: AlertType,
    ActionVariant: AlertActionVariant,
  };
}
