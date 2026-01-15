import { createContext } from 'react';
import { FieldsetContextProps } from './context.interface';

export const FieldsetContext = createContext<FieldsetContextProps | null>(null);
