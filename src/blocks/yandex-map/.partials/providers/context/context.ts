import type { YMapZoomContextProps } from '@/blocks/yandex-map/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const YMapZoomContext = createContext<YMapZoomContextProps | null>(null);
