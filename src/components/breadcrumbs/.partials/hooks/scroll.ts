import type {
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
  RefObject,
} from 'react';
import { useCallback, useRef, useState } from 'react';

const DRAG_THRESHOLD_PX = 6;

type UseScrollResult = {
  ref: RefObject<HTMLDivElement | null>;
  isDragging: boolean;
  onPointerDown: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerMove: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerUp: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerCancel: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onClickCapture: (event: ReactMouseEvent<HTMLDivElement>) => void;
};

export function useScroll(): UseScrollResult {
  const ref = useRef<HTMLDivElement | null>(null);
  const pointerIdRef = useRef<number | null>(null);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const didDragRef = useRef(false);
  const suppressClickRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const endPointer = useCallback((pointerId: number) => {
    const track = ref.current;

    if (track?.hasPointerCapture(pointerId)) {
      track.releasePointerCapture(pointerId);
    }

    if (didDragRef.current) {
      suppressClickRef.current = true;
    }

    pointerIdRef.current = null;
    didDragRef.current = false;
    setIsDragging(false);
  }, []);

  const onPointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (event.pointerType === 'touch' || event.button !== 0) {
        return;
      }

      const track = ref.current;
      if (!track) {
        return;
      }

      pointerIdRef.current = event.pointerId;
      startXRef.current = event.clientX;
      startScrollLeftRef.current = track.scrollLeft;
      didDragRef.current = false;
    },
    [],
  );

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (pointerIdRef.current !== event.pointerId) {
        return;
      }

      const track = ref.current;
      if (!track) {
        return;
      }

      const deltaX = event.clientX - startXRef.current;

      if (!didDragRef.current) {
        if (Math.abs(deltaX) < DRAG_THRESHOLD_PX) {
          return;
        }

        didDragRef.current = true;
        setIsDragging(true);
        track.setPointerCapture(event.pointerId);
      }

      track.scrollLeft = startScrollLeftRef.current - deltaX;
      event.preventDefault();
    },
    [],
  );

  const onPointerUp = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (pointerIdRef.current !== event.pointerId) {
        return;
      }

      endPointer(event.pointerId);
    },
    [endPointer],
  );

  const onPointerCancel = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (pointerIdRef.current !== event.pointerId) {
        return;
      }

      endPointer(event.pointerId);
    },
    [endPointer],
  );

  const onClickCapture = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      if (!suppressClickRef.current) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      suppressClickRef.current = false;
    },
    [],
  );

  return {
    ref,
    isDragging,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
    onClickCapture,
  };
}
