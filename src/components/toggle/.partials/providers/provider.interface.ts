import type { ToggleContextProps } from '@/components/toggle/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';

export interface ToggleProviderProps extends ToggleContextProps {
  children?: ReactNode;
}
