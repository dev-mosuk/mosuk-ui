import type { DrawerContextProps } from '@/components/drawer/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const DrawerContext = createContext<DrawerContextProps | null>(null);
