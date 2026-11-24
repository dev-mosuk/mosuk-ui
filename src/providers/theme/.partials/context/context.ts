import type { ThemeContextProps } from '@/providers/theme/.partials/context/context.interface';
import { createContext } from 'react';

export const ThemeContext = createContext<ThemeContextProps | null>(null);
