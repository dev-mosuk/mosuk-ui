import { YandexMapContextProps } from '@/providers/yandex/maps/context/context.interface';
import { createContext } from 'react';

export const YandexMapContext = createContext<YandexMapContextProps | null>(
  null,
);
