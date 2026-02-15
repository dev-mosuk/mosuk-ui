import { ReactNode } from 'react';

export interface ToggleProviderProps {
  value?: any | null;
  onChange?: (value: any) => void;

  children?: ReactNode;
}
