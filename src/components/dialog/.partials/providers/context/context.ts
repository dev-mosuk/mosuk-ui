import type { DialogContextProps } from '@/components/dialog/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const DialogContext = createContext<DialogContextProps | null>(null);
