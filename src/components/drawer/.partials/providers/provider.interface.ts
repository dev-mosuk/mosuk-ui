import type { DrawerContextProps } from '@/components/drawer/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';

export interface DrawerProviderProps extends DrawerContextProps {
  children?: ReactNode;
}
