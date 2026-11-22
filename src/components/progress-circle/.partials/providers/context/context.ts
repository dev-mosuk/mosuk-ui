import { ProgressCircleContextProps } from '@/components/progress-circle/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const ProgressCircleContext =
  createContext<ProgressCircleContextProps | null>(null);
