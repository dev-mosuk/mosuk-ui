import type { SliderContextProps } from '@/components/slider/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';

export interface SliderProviderProps extends SliderContextProps {
  children: ReactNode;
}
