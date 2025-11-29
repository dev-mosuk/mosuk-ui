import { createContext } from 'react';
import { DialogContextProps } from './component.interface';

export const DialogContext = createContext<DialogContextProps | null>(null);
