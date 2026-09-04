import { YandexMetrikaContextProps } from '@/integrations/yandex/metrika/provider/context/context.interface';
import { createContext } from 'react';

export const YandexMetrikaContext =
  createContext<YandexMetrikaContextProps | null>(null);
