import type { MutableRefObject, ReactNode } from 'react';

export interface SelectContextProps {
  placeholder?: ReactNode;
  isEmpty: boolean;
  clear: () => void;
  clearMounted: MutableRefObject<boolean>;
}
