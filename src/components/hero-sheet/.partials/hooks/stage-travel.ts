import { isHeroSheetHorizontal } from '@/components/hero-sheet/.partials/constants/component.constants';
import type { HeroSheetDirection } from '@/components/hero-sheet/.partials/enums/component.enums';
import { useLatest } from '@/components/hero-sheet/.partials/utils/util';
import { type RefObject, useCallback, useEffect, useRef } from 'react';

type UseStageTravelOptions = {
  stageRef: RefObject<HTMLDivElement | null>;
  rootRef: RefObject<HTMLDivElement | null>;
  direction: HeroSheetDirection | `${HeroSheetDirection}`;
  shouldIgnore: () => boolean;
  onMeasured: (travel: number) => void;
};

export function useStageTravel({
  stageRef,
  rootRef,
  direction,
  shouldIgnore,
  onMeasured,
}: UseStageTravelOptions) {
  const travelRef = useRef(1);
  const measuredRef = useRef(false);
  const directionRef = useLatest(direction);
  const shouldIgnoreRef = useLatest(shouldIgnore);
  const onMeasuredRef = useLatest(onMeasured);

  const measureTravel = useCallback(() => {
    const stage = stageRef.current;
    const root = rootRef.current;

    if (!stage || !root) {
      return travelRef.current;
    }

    const stageSize = Math.max(
      isHeroSheetHorizontal(directionRef.current)
        ? stage.offsetWidth
        : stage.offsetHeight,
      1,
    );

    const probe = document.createElement('div');

    probe.setAttribute('aria-hidden', 'true');
    probe.style.cssText =
      'position:absolute;width:0;height:var(--hero-sheet-overlap);pointer-events:none;visibility:hidden';
    root.appendChild(probe);

    const overlap = Math.max(probe.offsetHeight, 0);

    root.removeChild(probe);

    travelRef.current = Math.max(stageSize - overlap, 1);
    measuredRef.current = true;

    return travelRef.current;
  }, [directionRef, rootRef, stageRef]);

  const getTravelSize = useCallback(() => {
    if (!measuredRef.current) {
      return measureTravel();
    }

    return travelRef.current;
  }, [measureTravel]);

  useEffect(() => {
    let observer: ResizeObserver | null = null;
    let raf = 0;

    const attach = () => {
      const stage = stageRef.current;

      if (!stage) {
        raf = requestAnimationFrame(attach);

        return;
      }

      measureTravel();
      observer = new ResizeObserver(() => {
        if (shouldIgnoreRef.current()) {
          return;
        }

        onMeasuredRef.current(measureTravel());
      });
      observer.observe(stage);
    };

    attach();

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [measureTravel, onMeasuredRef, shouldIgnoreRef, stageRef]);

  return getTravelSize;
}
