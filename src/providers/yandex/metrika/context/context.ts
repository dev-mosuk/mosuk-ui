import { YandexMetrikaContextProps } from '@/providers/yandex/metrika/context/context.interface';
import { createContext } from 'react';

export const YandexMetrikaContext =
  createContext<YandexMetrikaContextProps | null>(null);
