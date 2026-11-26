'use client';

import { HeroSheetContentHandleProps } from '@/components/hero-sheet/.partials/components/content-handle/component.interface';
import {
  HERO_SHEET_HANDLE_MARKER,
  HERO_SHEET_MIN_SWIPE_THRESHOLD,
  isHeroSheetHorizontal,
} from '@/components/hero-sheet/.partials/constants/component.constants';
import { useHeroSheet } from '@/components/hero-sheet/.partials/hooks/hook';
import styles from '@/components/hero-sheet/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType, useCallback, useRef } from 'react';

export function HeroSheetContentHandle<C extends ElementType = 'div'>({
  as,
  ...rest
}: HeroSheetContentHandleProps<C>) {
  const {
    direction,
    isDisabled,
    rootRef,
    getScrollPos,
    getTravelSize,
    setScrollPos,
    requestSettle,
    setIsSwiping,
  } = useHeroSheet();
  const Component = (as || 'div') as ElementType;

  const dragRef = useRef<{
    pointerId: number;
    startPos: number;
    startScroll: number;
    lastPos: number;
    lastTime: number;
    velocity: number;
  } | null>(null);
  const pendingScrollRef = useRef<number | null>(null);
  const rafRef = useRef(0);

  const flushPendingScroll = useCallback(() => {
    rafRef.current = 0;

    const pending = pendingScrollRef.current;

    if (pending == null) {
      return;
    }

    pendingScrollRef.current = null;

    const travel = getTravelSize();

    setScrollPos(pending, 'instant');
    rootRef.current?.style.setProperty(
      '--hero-sheet-progress',
      String(pending / travel),
    );
  }, [getTravelSize, rootRef, setScrollPos]);

  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      rest?.onPointerDown?.(event as never);

      if (isDisabled || event.button !== 0) {
        return;
      }

      const point = isHeroSheetHorizontal(direction)
        ? event.clientX
        : event.clientY;

      dragRef.current = {
        pointerId: event.pointerId,
        startPos: point,
        startScroll: getScrollPos(),
        lastPos: point,
        lastTime: event.timeStamp,
        velocity: 0,
      };

      setIsSwiping(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [direction, getScrollPos, isDisabled, rest, setIsSwiping],
  );

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      rest?.onPointerMove?.(event as never);

      const drag = dragRef.current;

      if (!drag || drag.pointerId !== event.pointerId) {
        return;
      }

      const point = isHeroSheetHorizontal(direction)
        ? event.clientX
        : event.clientY;
      const delta = drag.startPos - point;
      const travel = getTravelSize();
      const nextScroll = Math.min(
        Math.max(0, drag.startScroll + delta),
        travel,
      );
      const dt = Math.max(event.timeStamp - drag.lastTime, 1);
      const sampleDelta = drag.lastPos - point;

      drag.velocity = sampleDelta / dt;
      drag.lastPos = point;
      drag.lastTime = event.timeStamp;

      pendingScrollRef.current = nextScroll;

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(flushPendingScroll);
      }
    },
    [direction, flushPendingScroll, getTravelSize, rest],
  );

  const endDrag = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const drag = dragRef.current;

      if (!drag || drag.pointerId !== event.pointerId) {
        return;
      }

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }

      flushPendingScroll();

      const traveled = Math.abs(drag.startScroll - getScrollPos());
      const velocity = Math.abs(drag.velocity) * (drag.velocity >= 0 ? 1 : -1);

      dragRef.current = null;
      setIsSwiping(false);

      try {
        event.currentTarget.releasePointerCapture(event.pointerId);
      } catch {
        // already released
      }

      if (
        traveled < HERO_SHEET_MIN_SWIPE_THRESHOLD &&
        Math.abs(velocity) < 0.01
      ) {
        return;
      }

      requestSettle(velocity);
    },
    [flushPendingScroll, getScrollPos, requestSettle, setIsSwiping],
  );

  const onPointerUp = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      rest?.onPointerUp?.(event as never);
      endDrag(event);
    },
    [endDrag, rest],
  );

  const onPointerCancel = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      rest?.onPointerCancel?.(event as never);
      endDrag(event);
    },
    [endDrag, rest],
  );

  return (
    <Component
      {...rest}
      {...{ [HERO_SHEET_HANDLE_MARKER]: '' }}
      role='presentation'
      data-direction={direction}
      className={classNames(
        'mosuk-hero-sheet-content-handle',
        styles.handle,
        rest?.className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      {rest?.children}
    </Component>
  );
}

HeroSheetContentHandle.displayName = 'HeroSheet.Content.Handle';
