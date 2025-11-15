import { createElement } from 'react';
import { YandexMapsProvider as BaseYandexMapsProvider } from './provider';
import { YandexMapsProviderProps } from './provider.interface';

export const YandexMapsProvider = (props: YandexMapsProviderProps) => {
  return createElement(BaseYandexMapsProvider, props);
};

export namespace YandexMapsProvider {
  export type Props = YandexMapsProviderProps;
}
