import { ToggleContextProps } from '@/components/actions/toggle/component/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const ToggleContext = createContext<ToggleContextProps | null>(null);
