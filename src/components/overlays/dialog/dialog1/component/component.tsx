import { Dialog as BaseUiDialog } from '@base-ui/react/dialog';
import React, {
    CSSProperties,
    MouseEvent,
    TouchEvent,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { DialogProps } from './component.interface';
import { DialogContext } from './context/component';

export function Dialog({ keepMounted, container, ...rest }: DialogProps) {
  const popupRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);
  const [dragState, setDragState] = useState({
    isDragging: false,
    startY: 0,
    isTouch: false,
  });
  const { isDragging, startY, isTouch } = dragState;

  const applyProgress = useCallback((value: number) => {
    setProgress(value);
  }, []);

  const handleOpenChange = useCallback(
    (open: boolean, eventDetails?: any) => {
      rest?.onOpenChange?.(open, eventDetails);
    },
    [rest?.onOpenChange]
  );

  useEffect(() => {
    if (rest?.open) {
      setProgress(0);
      requestAnimationFrame(() => setProgress(1));
    } else {
      setProgress(0);
    }
  }, [rest?.open]);

  const calculateProgress = useCallback(
    (clientY: number) => {
      if (!startY || !popupRef.current) return 1;
      const delta = clientY - startY;
      const height = popupRef.current.getBoundingClientRect().height || 0;
      if (height === 0 || delta <= 0) return 1;
      return Math.max(0, Math.min(1, 1 - delta / height));
    },
    [startY]
  );

  const handleTouchStart = useCallback(
    (e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
      const now = Date.now();
      (e as any)._lastClick = now;
      const isTouchEvent = 'touches' in e;
      const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;
      setDragState({
        isDragging: true,
        startY: clientY,
        isTouch: isTouchEvent,
      });
    },
    [rest?.onOpenChange]
  );

  const handleDragMove = useCallback(
    (clientY: number) => {
      if (!isDragging) return;
      const newProgress = calculateProgress(clientY);
      applyProgress(newProgress);
    },
    [isDragging, calculateProgress, applyProgress]
  );

  const handleDragEnd = useCallback(
    (clientY?: number) => {
      if (!isDragging) return;
      setDragState((s) => ({ ...s, isDragging: false }));
      if (clientY !== undefined) handleDragMove(clientY);
      if (progress < 0.5) {
        rest?.onOpenChange?.(false, undefined as any);
      } else {
        applyProgress(1);
      }
    },
    [isDragging, handleDragMove, progress, applyProgress, rest?.onOpenChange]
  );

  useEffect(() => {
    if (!isDragging) return;
    const move = (e: globalThis.MouseEvent) => {
      handleDragMove(e.clientY);
    };
    const touchMove = (e: globalThis.TouchEvent) => {
      if (e.touches.length > 0) {
        handleDragMove(e.touches[0].clientY);
      }
    };
    const end = (e: globalThis.MouseEvent) => {
      handleDragEnd(e.clientY);
    };
    const touchEnd = (e: globalThis.TouchEvent) => {
      if (e.changedTouches.length > 0) {
        handleDragEnd(e.changedTouches[0].clientY);
      }
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', end);
    document.addEventListener('touchmove', touchMove, { passive: false });
    document.addEventListener('touchend', touchEnd);
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', end);
      document.removeEventListener('touchmove', touchMove);
      document.removeEventListener('touchend', touchEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // * Styles
  const styleVars = useMemo(
    () =>
    ({
      '--progress': progress,
    } as CSSProperties),
    [progress]
  );

  return (
    <DialogContext.Provider
      value={{
        styleVars,
        popupRef,
        isDragging,
        handleTouchStart,
        onOpenChange: handleOpenChange,
        open: rest?.open,
      }}
    >
      <BaseUiDialog.Root
        {...rest}
        modal={rest?.modal ?? true}
        open={rest?.open}
        onOpenChange={rest?.onOpenChange}
      >
        <BaseUiDialog.Portal container={container ?? undefined} keepMounted={keepMounted ?? false}>
          {rest?.children}
        </BaseUiDialog.Portal>
      </BaseUiDialog.Root>
    </DialogContext.Provider>
  );
}
