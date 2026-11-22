import { YandexMetrikaContextProps } from '@/providers/yandex-metrika/.partials/context/context.interface';
import { createContext } from 'react';

export const YandexMetrikaContext =
  createContext<YandexMetrikaContextProps | null>(null);
