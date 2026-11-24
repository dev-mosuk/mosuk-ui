import type { ToggleContextProps } from '@/components/toggle/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const ToggleContext = createContext<ToggleContextProps | null>(null);
