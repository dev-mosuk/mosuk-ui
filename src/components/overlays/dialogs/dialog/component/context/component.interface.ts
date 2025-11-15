import { CSSProperties, MouseEvent, RefObject, TouchEvent } from 'react';

export interface ContextProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;

  styleVars: CSSProperties;
  popupRef: RefObject<HTMLDivElement | null>;
  isDragging: boolean;
  handleTouchStart: (e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => void;
}
