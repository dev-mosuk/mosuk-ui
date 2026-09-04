import { YandexMapContextProps } from '@/integrations/yandex/maps/provider/context/context.interface';
import { createContext } from 'react';

export const YandexMapContext = createContext<YandexMapContextProps | null>(
  null,
);
