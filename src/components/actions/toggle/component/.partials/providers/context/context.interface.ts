import type { RefObject } from 'react';

export type ToggleOrientation = 'horizontal' | 'vertical';

export interface ToggleContextProps {
  value: any | null;
  onChange: (value: any) => void;

  containerRef: RefObject<HTMLElement | null>;
  optionRefs: RefObject<Map<any, HTMLElement>>;
  registerOption: (value: any, el: HTMLElement | null) => void;

  orientation: ToggleOrientation;
}
