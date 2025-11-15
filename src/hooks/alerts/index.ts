import { useAlerts as BaseUseAlerts } from './hook';
import { UseAlertsProps } from './hook.interface';

export const useAlerts = BaseUseAlerts;

export namespace useAlerts {
  export type Props = UseAlertsProps;
}
