import { AlertsProvider as BaseAlertsProvider } from '@/providers/alerts/provider';
import type { AlertsProviderProps } from '@/providers/alerts/provider.interface';
import { createElement } from 'react';

export const AlertsProvider = (props: AlertsProviderProps) => {
  return createElement(BaseAlertsProvider, props);
};

export namespace AlertsProvider {
  export type Props = AlertsProviderProps;
}
