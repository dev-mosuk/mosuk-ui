import { FieldsetContextProps } from '@/components/forms/fieldset/providers/context/context.interface';
import { createContext } from 'react';

export const FieldsetContext = createContext<FieldsetContextProps | null>(null);
