import { YandexMetrikaProvider as BaseYandexMetrikaProvider } from '@/integrations/yandex/metrika/provider/provider';
import { YandexMetrikaProviderProps } from '@/integrations/yandex/metrika/provider/provider.interface';
import { createElement } from 'react';

export const YandexMetrikaProvider = (props: YandexMetrikaProviderProps) => {
  return createElement(BaseYandexMetrikaProvider, props);
};

export namespace YandexMetrikaProvider {
  export type Props = YandexMetrikaProviderProps;
}
