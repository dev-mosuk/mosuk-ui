import { useAlerts as BaseUseAlerts } from '@/hooks/alerts/hook';
import { UseAlertsProps } from '@/hooks/alerts/hook.interface';

export const useAlerts = BaseUseAlerts;

export namespace useAlerts {
  export type Props = UseAlertsProps;
}
