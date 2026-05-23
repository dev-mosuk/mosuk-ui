import type { YMapZoomContextProps } from '@/components/integrations/yandex/maps/component/zoom/context.interface';
import { createContext } from 'react';

export const YMapZoomContext = createContext<YMapZoomContextProps | null>(null);
