import { createContext } from 'react';
import { YandexMapsContextProps } from './context.interface';

export const YandexMapsContext = createContext<YandexMapsContextProps | null>(null);
