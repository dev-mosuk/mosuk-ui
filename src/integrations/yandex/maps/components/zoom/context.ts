import type { YMapZoomContextProps } from '@/integrations/yandex/maps/components/zoom/context.interface';
import { createContext } from 'react';

export const YMapZoomContext = createContext<YMapZoomContextProps | null>(null);
