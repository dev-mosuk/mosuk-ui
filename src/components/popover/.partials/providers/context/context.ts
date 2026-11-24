import type { PopoverContextProps } from '@/components/popover/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const PopoverContext = createContext<PopoverContextProps | null>(null);
