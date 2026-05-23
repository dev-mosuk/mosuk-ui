import { FieldsetContextProps } from '@/components/forms/fieldset/component/providers/context/context.interface';
import { createContext } from 'react';

export const FieldsetContext = createContext<FieldsetContextProps | null>(null);
