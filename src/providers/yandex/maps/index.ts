import { YandexMapProvider as BaseYandexMapProvider } from '@/providers/yandex/maps/provider';
import { YandexMapProviderProps } from '@/providers/yandex/maps/provider.interface';
import { createElement } from 'react';

export const YandexMapProvider = (props: YandexMapProviderProps) => {
  return createElement(BaseYandexMapProvider, props);
};

export namespace YandexMapProvider {
  export type Props = YandexMapProviderProps;
}
