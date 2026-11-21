import type { SelectContextProps } from '@/components/actions/select/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const SelectContext = createContext<SelectContextProps | null>(null);
