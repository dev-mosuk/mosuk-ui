import { ReactNode, RefObject } from 'react';

export interface ToggleProviderProps {
  value?: any | null;
  onChange?: (value: any) => void;
  containerRef?: RefObject<HTMLElement | null>;

  children?: ReactNode;
}
