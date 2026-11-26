import { isHeroSheetHorizontal } from '@/components/hero-sheet/.partials/constants/component.constants';
import type { HeroSheetDirection } from '@/components/hero-sheet/.partials/enums/component.enums';
import {
  HERO_SHEET_SCROLL_KEYS,
  isEditableTarget,
  useLatest,
} from '@/components/hero-sheet/.partials/utils/util';
import { type RefObject, useEffect } from 'react';

type UseScrollIntentOptions = {
  rootRef: RefObject<HTMLDivElement | null>;
  direction: HeroSheetDirection | `${HeroSheetDirection}`;
  intentRef: RefObject<boolean>;
  touchingRef: RefObject<boolean>;
  isSwipingRef: RefObject<boolean>;
  onTouchStart: () => void;
  onRelease: () => void;
};

export function useScrollIntent({
  rootRef,
  direction,
  intentRef,
  touchingRef,
  isSwipingRef,
  onTouchStart,
  onRelease,
}: UseScrollIntentOptions) {
  const onTouchStartRef = useLatest(onTouchStart);
  const onReleaseRef = useLatest(onRelease);

  useEffect(() => {
    const root = rootRef.current;

    const markIntent = () => {
      intentRef.current = true;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        !HERO_SHEET_SCROLL_KEYS.has(event.key) ||
        isEditableTarget(event.target)
      ) {
        return;
      }

      markIntent();
    };

    const handleTouchEnd = () => {
      if (!touchingRef.current) {
        return;
      }

      touchingRef.current = false;

      if (isSwipingRef.current) {
        return;
      }

      onReleaseRef.current();
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchingRef.current = true;
      markIntent();
      onTouchStartRef.current();

      const target = event.target;

      target?.addEventListener('touchend', handleTouchEnd, { once: true });
      target?.addEventListener('touchcancel', handleTouchEnd, { once: true });
    };

    const wheelTarget = isHeroSheetHorizontal(direction) ? root : window;

    wheelTarget?.addEventListener('wheel', markIntent, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    root?.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    return () => {
      wheelTarget?.removeEventListener('wheel', markIntent);
      window.removeEventListener('keydown', handleKeyDown);
      root?.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [
    direction,
    intentRef,
    isSwipingRef,
    onReleaseRef,
    onTouchStartRef,
    rootRef,
    touchingRef,
  ]);
}
