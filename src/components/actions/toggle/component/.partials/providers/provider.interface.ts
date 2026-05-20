import { ReactNode, RefObject } from 'react';
import type { ToggleOrientation } from './context/context.interface';

export interface ToggleProviderProps {
  value?: any | null;
  onChange?: (value: any) => void;
  containerRef?: RefObject<HTMLElement | null>;

  orientation?: ToggleOrientation;

  children?: ReactNode;
}
