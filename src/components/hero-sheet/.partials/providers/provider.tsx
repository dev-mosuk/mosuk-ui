'use client';

import {
  HERO_SHEET_FAST_SWIPE_VELOCITY,
  HERO_SHEET_MIN_SWIPE_THRESHOLD,
  HERO_SHEET_PROGRESS_STATE_STEP,
  HERO_SHEET_SCROLL_END_MS,
  HERO_SHEET_SNAP_UNLOCK_MS,
  isHeroSheetHorizontal,
} from '@/components/hero-sheet/.partials/constants/component.constants';
import { useScrollIntent } from '@/components/hero-sheet/.partials/hooks/scroll-intent';
import { useStageTravel } from '@/components/hero-sheet/.partials/hooks/stage-travel';
import { HeroSheetContext } from '@/components/hero-sheet/.partials/providers/context/context';
import type { HeroSheetProviderProps } from '@/components/hero-sheet/.partials/providers/provider.interface';
import { scrollBehavior } from '@/components/hero-sheet/.partials/utils/util';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export function HeroSheetProvider({
  direction,
  variant,
  openThreshold,
  closeThreshold,
  progress: progressProp,
  isDisabled,
  isOpen: isOpenProp,
  onOpenChange,
  onProgressChange,
  children,
}: HeroSheetProviderProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isSwiping, setIsSwipingState] = useState(false);

  const cfg = useRef({ isDisabled, openThreshold, closeThreshold, direction });
  cfg.current = { isDisabled, openThreshold, closeThreshold, direction };

  const openRef = useRef(false);
  const progressRef = useRef(0);
  const cssProgressRef = useRef(0);
  const snappingRef = useRef(false);
  const isSwipingRef = useRef(false);
  const velocityRef = useRef(0);
  const intentRef = useRef(false);
  const touchingRef = useRef(false);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const snapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onOpenChangeRef = useRef(onOpenChange);
  const onProgressChangeRef = useRef(onProgressChange);
  const appliedProgressPropRef = useRef<number | undefined>(undefined);

  onOpenChangeRef.current = onOpenChange;
  onProgressChangeRef.current = onProgressChange;

  const getScroller = useCallback(
    () =>
      isHeroSheetHorizontal(cfg.current.direction) ? rootRef.current : window,
    [],
  );

  const getScrollPos = useCallback(() => {
    const scroller = getScroller();

    return scroller instanceof Window
      ? scroller.scrollY
      : (scroller?.scrollLeft ?? 0);
  }, [getScroller]);

  const publishProgress = useCallback((nextProgress: number, force = false) => {
    const clamped = Math.min(Math.max(nextProgress, 0), 1);

    if (clamped !== cssProgressRef.current) {
      cssProgressRef.current = clamped;
      rootRef.current?.style.setProperty(
        '--hero-sheet-progress',
        String(clamped),
      );
    }

    // During handle drag — CSS var only (no context re-render)
    if (isSwipingRef.current) {
      return;
    }

    if (clamped === progressRef.current) {
      return;
    }

    const hitEdge = clamped === 0 || clamped === 1;
    const stepped =
      Math.abs(clamped - progressRef.current) >=
        HERO_SHEET_PROGRESS_STATE_STEP || hitEdge;

    if (!force && !stepped) {
      return;
    }

    progressRef.current = clamped;
    setProgress(clamped);
    onProgressChangeRef.current?.(clamped);
  }, []);

  const commitOpen = useCallback((nextOpen: boolean) => {
    if (nextOpen === openRef.current) {
      return;
    }

    openRef.current = nextOpen;
    setIsOpen(nextOpen);
    onOpenChangeRef.current?.(nextOpen);
  }, []);

  const getTravelSize = useStageTravel({
    stageRef,
    rootRef,
    direction,
    shouldIgnore: () => isSwipingRef.current || touchingRef.current,
    onMeasured: (travel) => {
      publishProgress(getScrollPos() / travel);
    },
  });

  const setScrollPos = useCallback(
    (value: number, behavior: ScrollBehavior = 'instant') => {
      const clamped = Math.min(Math.max(value, 0), getTravelSize());

      // Same position: do not interrupt a mobile fling
      if (Math.abs(getScrollPos() - clamped) < 1) {
        return false;
      }

      if (isHeroSheetHorizontal(cfg.current.direction)) {
        rootRef.current?.scrollTo({ left: clamped, behavior });

        return true;
      }

      window.scrollTo({ top: clamped, behavior });

      return true;
    },
    [getScrollPos, getTravelSize],
  );

  const clearSnapTimer = useCallback(() => {
    if (snapTimerRef.current) {
      clearTimeout(snapTimerRef.current);
      snapTimerRef.current = null;
    }
  }, []);

  const clearScrollEnd = useCallback(() => {
    if (scrollEndTimerRef.current) {
      clearTimeout(scrollEndTimerRef.current);
      scrollEndTimerRef.current = null;
    }
  }, []);

  const armScrollEnd = useCallback(
    (callback: () => void) => {
      clearScrollEnd();

      scrollEndTimerRef.current = setTimeout(() => {
        scrollEndTimerRef.current = null;
        callback();
      }, HERO_SHEET_SCROLL_END_MS);
    },
    [clearScrollEnd],
  );

  const scheduleSnapUnlock = useCallback(
    (behavior: ScrollBehavior, onUnlock?: () => void) => {
      clearSnapTimer();

      snapTimerRef.current = setTimeout(
        () => {
          snapTimerRef.current = null;
          snappingRef.current = false;

          if (isSwipingRef.current) {
            return;
          }

          onUnlock?.();
        },
        behavior === 'instant' ? 0 : HERO_SHEET_SNAP_UNLOCK_MS,
      );
    },
    [clearSnapTimer],
  );

  const snapTo = useCallback(
    (target: number, onDone?: () => void) => {
      const behavior = scrollBehavior();

      if (!setScrollPos(target, behavior)) {
        onDone?.();

        return;
      }

      snappingRef.current = true;
      scheduleSnapUnlock(behavior, onDone);
    },
    [scheduleSnapUnlock, setScrollPos],
  );

  const cancelPendingSnap = useCallback(() => {
    clearScrollEnd();
    clearSnapTimer();
    velocityRef.current = 0;
    intentRef.current = false;

    const wasSnapping = snappingRef.current;
    snappingRef.current = false;

    // Interrupt smooth only while it is actually running inside the cover zone.
    if (wasSnapping && getScrollPos() <= getTravelSize()) {
      setScrollPos(getScrollPos(), 'instant');
    }
  }, [
    clearScrollEnd,
    clearSnapTimer,
    getScrollPos,
    getTravelSize,
    intentRef,
    setScrollPos,
  ]);

  const setIsSwiping = useCallback(
    (next: boolean) => {
      isSwipingRef.current = next;

      const root = rootRef.current;

      if (next) {
        cancelPendingSnap();
        intentRef.current = true;
        root?.setAttribute('data-swiping', '');
      } else {
        root?.removeAttribute('data-swiping');
        publishProgress(cssProgressRef.current, true);
      }

      setIsSwipingState(next);
    },
    [cancelPendingSnap, intentRef, publishProgress],
  );

  const settle = useCallback(() => {
    if (
      snappingRef.current ||
      cfg.current.isDisabled ||
      isSwipingRef.current ||
      touchingRef.current
    ) {
      return;
    }

    if (!intentRef.current) {
      return;
    }

    const velocity = velocityRef.current;
    velocityRef.current = 0;
    intentRef.current = false;

    const travel = getTravelSize();
    const pos = getScrollPos();

    // Past cover range: free Content scroll — do not snap back to travel
    if (pos >= travel - 1) {
      publishProgress(1);
      commitOpen(true);

      return;
    }

    const current = pos / travel;
    const { openThreshold: openAt, closeThreshold: closeAt } = cfg.current;

    const fast =
      Math.abs(velocity) >= HERO_SHEET_FAST_SWIPE_VELOCITY &&
      Math.abs(pos) >= HERO_SHEET_MIN_SWIPE_THRESHOLD;

    let target = 0;

    if (fast) {
      target = velocity > 0 ? travel : 0;
    } else if (openRef.current) {
      target = current <= 1 - closeAt ? 0 : travel;
    } else {
      target = current >= openAt ? travel : 0;
    }

    const nextOpen = target >= travel - 1;

    publishProgress(current);

    if (Math.abs(pos - target) < 1) {
      publishProgress(target / travel);
      commitOpen(nextOpen);

      return;
    }

    snapTo(target, () => {
      publishProgress(getScrollPos() / getTravelSize());
      commitOpen(nextOpen);
    });
  }, [
    commitOpen,
    getScrollPos,
    getTravelSize,
    intentRef,
    publishProgress,
    snapTo,
    touchingRef,
  ]);

  const requestSettle = useCallback(
    (velocity = 0) => {
      if (cfg.current.isDisabled || isSwipingRef.current) {
        return;
      }

      if (velocity !== 0) {
        velocityRef.current = velocity;
      }

      armScrollEnd(settle);
    },
    [armScrollEnd, settle],
  );

  useScrollIntent({
    rootRef,
    direction,
    intentRef,
    touchingRef,
    isSwipingRef,
    onTouchStart: clearScrollEnd,
    onRelease: requestSettle,
  });

  useEffect(() => {
    if (
      cfg.current.isDisabled ||
      touchingRef.current ||
      isSwipingRef.current ||
      snappingRef.current
    ) {
      return;
    }

    const target =
      progressProp !== undefined
        ? Math.min(Math.max(progressProp, 0), 1)
        : isOpenProp === undefined
          ? undefined
          : isOpenProp
            ? 1
            : 0;

    if (target === undefined) {
      return;
    }

    const travel = getTravelSize();
    const alreadyDeepOpen = target >= 1 && getScrollPos() >= travel - 1;
    const applied = appliedProgressPropRef.current;
    const unchanged =
      applied !== undefined && Math.abs(target - applied) < 0.001;

    if (alreadyDeepOpen || unchanged) {
      appliedProgressPropRef.current = target;

      return;
    }

    appliedProgressPropRef.current = target;
    publishProgress(target);
    commitOpen(target >= 1 - 1e-3);
    snapTo(target * travel);
  }, [
    commitOpen,
    getScrollPos,
    getTravelSize,
    isDisabled,
    isOpenProp,
    progressProp,
    publishProgress,
    snapTo,
    touchingRef,
  ]);

  useEffect(() => {
    let ticking = false;
    const root = rootRef.current;

    const update = () => {
      ticking = false;
      publishProgress(getScrollPos() / getTravelSize());
    };

    const handleScroll = () => {
      if (cfg.current.isDisabled || isSwipingRef.current) {
        return;
      }

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }

      if (touchingRef.current || snappingRef.current || !intentRef.current) {
        return;
      }

      requestSettle();
    };

    const scrollTarget = isHeroSheetHorizontal(direction) ? root : window;

    scrollTarget?.addEventListener('scroll', handleScroll, { passive: true });
    update();

    return () => {
      scrollTarget?.removeEventListener('scroll', handleScroll);
    };
  }, [
    direction,
    getScrollPos,
    getTravelSize,
    intentRef,
    publishProgress,
    requestSettle,
    touchingRef,
  ]);

  useEffect(() => {
    return () => {
      clearSnapTimer();
      snappingRef.current = false;
      clearScrollEnd();
    };
  }, [clearScrollEnd, clearSnapTimer]);

  const value = useMemo(
    () => ({
      direction,
      variant,
      isDisabled,
      progress,
      isOpen,
      isSwiping,
      stageRef,
      rootRef,
      setIsSwiping,
      getTravelSize,
      getScrollPos,
      setScrollPos,
      requestSettle,
    }),
    [
      direction,
      getScrollPos,
      getTravelSize,
      isDisabled,
      isOpen,
      isSwiping,
      progress,
      requestSettle,
      setIsSwiping,
      setScrollPos,
      variant,
    ],
  );

  return (
    <HeroSheetContext.Provider value={value}>
      {children}
    </HeroSheetContext.Provider>
  );
}
