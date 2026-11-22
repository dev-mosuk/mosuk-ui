import type { YMapZoomContextProps } from '@/components/yandex-maps/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const YMapZoomContext = createContext<YMapZoomContextProps | null>(null);
