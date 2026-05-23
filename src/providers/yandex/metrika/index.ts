import { YandexMetrikaProvider as BaseYandexMetrikaProvider } from '@/providers/yandex/metrika/provider';
import { YandexMetrikaProviderProps } from '@/providers/yandex/metrika/provider.interface';
import { createElement } from 'react';

export const YandexMetrikaProvider = (props: YandexMetrikaProviderProps) => {
  return createElement(BaseYandexMetrikaProvider, props);
};

export namespace YandexMetrikaProvider {
  export type Props = YandexMetrikaProviderProps;
}
