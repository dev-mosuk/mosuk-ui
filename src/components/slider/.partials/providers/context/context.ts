import type { SliderContextProps } from '@/components/slider/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const SliderContext = createContext<SliderContextProps | null>(null);
