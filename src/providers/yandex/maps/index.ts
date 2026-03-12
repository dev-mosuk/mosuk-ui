import { createElement } from 'react';
import { YandexMapProvider as BaseYandexMapProvider } from './provider';
import { YandexMapProviderProps } from './provider.interface';

export const YandexMapProvider = (props: YandexMapProviderProps) => {
  return createElement(BaseYandexMapProvider, props);
};

export namespace YandexMapProvider {
  export type Props = YandexMapProviderProps;
}
