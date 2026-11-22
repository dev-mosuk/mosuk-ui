import type { ScrollShadowEdgeVisibility } from '@/components/scroll-shadow/.partials/components/component.interface';
import type { UseScrollShadowProps } from '@/components/scroll-shadow/.partials/hooks/hook.interface';
import { useEffect, useLayoutEffect, useRef } from 'react';

type ScrollEdges = {
  hasOverflow: boolean;
  hasScrollBefore: boolean;
  hasScrollAfter: boolean;
};

const EDGE_ATTRIBUTE = {
  top: 'topScroll',
  bottom: 'bottomScroll',
  left: 'leftScroll',
  right: 'rightScroll',
} as const;

function readEdges(
  element: HTMLElement,
  orientation: 'vertical' | 'horizontal',
  offset: number,
): ScrollEdges {
  const isVertical = orientation === 'vertical';
  const scrollStart = isVertical
    ? element.scrollTop
    : Math.abs(element.scrollLeft);
  const scrollSize = isVertical ? element.scrollHeight : element.scrollWidth;
  const clientSize = isVertical ? element.clientHeight : element.clientWidth;

  return {
    hasOverflow: scrollSize - clientSize > 1,
    hasScrollBefore: scrollStart > offset,
    hasScrollAfter: scrollStart + clientSize + offset < scrollSize - 1,
  };
}

function clearEdgeAttributes(element: HTMLElement) {
  delete element.dataset.topScroll;
  delete element.dataset.bottomScroll;
  delete element.dataset.topBottomScroll;
  delete element.dataset.leftScroll;
  delete element.dataset.rightScroll;
  delete element.dataset.leftRightScroll;
}

function writeEdges(
  element: HTMLElement,
  orientation: 'vertical' | 'horizontal',
  edges: ScrollEdges,
  onVisibilityChange?: (visibility: ScrollShadowEdgeVisibility) => void,
) {
  clearEdgeAttributes(element);
  element.dataset.overflow = edges.hasOverflow ? 'true' : 'false';

  if (orientation === 'vertical') {
    if (edges.hasScrollBefore && edges.hasScrollAfter) {
      element.dataset.topBottomScroll = 'true';
      onVisibilityChange?.('both');

      return;
    }

    element.dataset.topScroll = String(edges.hasScrollBefore);
    element.dataset.bottomScroll = String(edges.hasScrollAfter);

    if (edges.hasScrollBefore) {
      onVisibilityChange?.('top');
    } else if (edges.hasScrollAfter) {
      onVisibilityChange?.('bottom');
    } else {
      onVisibilityChange?.('none');
    }

    return;
  }

  if (edges.hasScrollBefore && edges.hasScrollAfter) {
    element.dataset.leftRightScroll = 'true';
    onVisibilityChange?.('both');

    return;
  }

  element.dataset.leftScroll = String(edges.hasScrollBefore);
  element.dataset.rightScroll = String(edges.hasScrollAfter);

  if (edges.hasScrollBefore) {
    onVisibilityChange?.('left');
  } else if (edges.hasScrollAfter) {
    onVisibilityChange?.('right');
  } else {
    onVisibilityChange?.('none');
  }
}

function edgesEqual(previous: ScrollEdges, next: ScrollEdges) {
  return (
    previous.hasOverflow === next.hasOverflow &&
    previous.hasScrollBefore === next.hasScrollBefore &&
    previous.hasScrollAfter === next.hasScrollAfter
  );
}

export function useScrollShadow({
  containerRef,
  isEnabled,
  offset,
  onVisibilityChange,
  orientation,
  visibility,
}: UseScrollShadowProps) {
  const onVisibilityChangeRef = useRef(onVisibilityChange);

  useEffect(() => {
    onVisibilityChangeRef.current = onVisibilityChange;
  }, [onVisibilityChange]);

  useLayoutEffect(() => {
    const element = containerRef.current;

    if (!element || (visibility === 'auto' && isEnabled)) {
      return;
    }

    clearEdgeAttributes(element);
    delete element.dataset.overflow;

    if (visibility === 'auto' || visibility === 'none') {
      return;
    }

    if (visibility === 'both') {
      element.dataset[
        orientation === 'vertical' ? 'topBottomScroll' : 'leftRightScroll'
      ] = 'true';

      return;
    }

    element.dataset[EDGE_ATTRIBUTE[visibility]] = 'true';
  }, [containerRef, isEnabled, orientation, visibility]);

  useLayoutEffect(() => {
    const element = containerRef.current;

    if (!element || !isEnabled || visibility !== 'auto') {
      return;
    }

    let previous: ScrollEdges | null = null;
    let frameId: number | null = null;

    const apply = () => {
      const next = readEdges(element, orientation, offset);

      if (previous && edgesEqual(previous, next)) {
        return;
      }

      previous = next;
      writeEdges(element, orientation, next, onVisibilityChangeRef.current);
    };

    const schedule = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        frameId = null;
        apply();
      });
    };

    apply();

    element.addEventListener('scroll', schedule, { passive: true });

    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(element);

    const mutationObserver = new MutationObserver(schedule);
    mutationObserver.observe(element, {
      attributeFilter: ['class', 'style'],
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    });

    return () => {
      element.removeEventListener('scroll', schedule);
      resizeObserver.disconnect();
      mutationObserver.disconnect();

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [containerRef, isEnabled, offset, orientation, visibility]);
}
