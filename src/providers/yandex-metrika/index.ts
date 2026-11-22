import { YandexMetrikaProvider as BaseYandexMetrikaProvider } from '@/providers/yandex-metrika/.partials/provider';
import type { YandexMetrikaProviderProps } from '@/providers/yandex-metrika/.partials/provider.interface';
import { createElement } from 'react';

export const YandexMetrikaProvider = (props: YandexMetrikaProviderProps) => {
  return createElement(BaseYandexMetrikaProvider, props);
};

export namespace YandexMetrikaProvider {
  export type Props = YandexMetrikaProviderProps;
}
