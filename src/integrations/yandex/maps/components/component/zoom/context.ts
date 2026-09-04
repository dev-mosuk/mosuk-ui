import type { YMapZoomContextProps } from '@/integrations/yandex/maps/components/component/zoom/context.interface';
import { createContext } from 'react';

export const YMapZoomContext = createContext<YMapZoomContextProps | null>(null);
