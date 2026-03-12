import { createContext } from 'react';
import { YandexMapContextProps } from './context.interface';

export const YandexMapContext = createContext<YandexMapContextProps | null>(
  null,
);
