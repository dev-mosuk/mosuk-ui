import type { CounterContextProps } from '@/components/counter/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const CounterContext = createContext<CounterContextProps | null>(null);
