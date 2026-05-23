import type { ToggleOrientation } from '@/components/actions/toggle/component/.partials/providers/context/context.interface';
import { ReactNode, RefObject } from 'react';

export interface ToggleProviderProps {
  value?: any | null;
  onChange?: (value: any) => void;
  containerRef?: RefObject<HTMLElement | null>;

  orientation?: ToggleOrientation;

  children?: ReactNode;
}
