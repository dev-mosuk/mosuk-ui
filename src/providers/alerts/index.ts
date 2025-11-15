import { createElement } from 'react';
import { AlertsProvider as BaseAlertsProvider } from './provider';
import type { AlertsProviderProps } from './provider.interface';

export const AlertsProvider = (props: AlertsProviderProps) => {
  return createElement(BaseAlertsProvider, props);
};

export namespace AlertsProvider {
  export type Props = AlertsProviderProps;
}