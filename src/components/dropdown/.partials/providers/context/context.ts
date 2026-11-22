import type { DropdownContextProps } from '@/components/dropdown/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const DropdownContext = createContext<DropdownContextProps | null>(null);
