import { createElement } from 'react';
import { YandexMetrikaProvider as BaseYandexMetrikaProvider } from './provider';
import { YandexMetrikaProviderProps } from './provider.interface';

export const YandexMetrikaProvider = (props: YandexMetrikaProviderProps) => {
  return createElement(BaseYandexMetrikaProvider, props);
};

export namespace YandexMetrikaProvider {
  export type Props = YandexMetrikaProviderProps;
}

