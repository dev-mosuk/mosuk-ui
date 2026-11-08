import { AlertsProvider as BaseAlertsProvider } from '@/providers/alerts/.partials/provider';
import type { AlertsProviderProps } from '@/providers/alerts/.partials/provider.interface';
import { createElement } from 'react';

export const AlertsProvider = (props: AlertsProviderProps) => {
  return createElement(BaseAlertsProvider, props);
};

export namespace AlertsProvider {
  export type Props = AlertsProviderProps;
}
