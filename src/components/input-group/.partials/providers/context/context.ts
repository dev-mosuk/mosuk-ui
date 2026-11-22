import type { InputGroupContextProps } from '@/components/input-group/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const InputGroupContext = createContext<InputGroupContextProps | null>(
  null,
);
