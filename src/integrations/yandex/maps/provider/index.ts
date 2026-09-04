import { YandexMapProvider as BaseYandexMapProvider } from '@/integrations/yandex/maps/provider/provider';
import { YandexMapProviderProps } from '@/integrations/yandex/maps/provider/provider.interface';
import { createElement } from 'react';

export const YandexMapProvider = (props: YandexMapProviderProps) => {
  return createElement(BaseYandexMapProvider, props);
};

export namespace YandexMapProvider {
  export type Props = YandexMapProviderProps;
}
