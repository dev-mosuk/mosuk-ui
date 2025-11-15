import { createContext } from 'react';
import { YandexMetrikaContextProps } from './context.interface';

export const YandexMetrikaContext = createContext<YandexMetrikaContextProps | null>(null);
