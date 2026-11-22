import { FieldsetContextProps } from '@/components/fieldset/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const FieldsetContext = createContext<FieldsetContextProps | null>(null);
