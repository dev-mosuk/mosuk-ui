import type { ToggleOrientation } from '@/components/actions/toggle/component/.partials/providers/context/context.interface';

export type ScrollToggleIntoViewBehavior = 'auto' | 'smooth';

function resolveBehavior(
  behavior: ScrollToggleIntoViewBehavior,
): ScrollBehavior {
  if (behavior === 'smooth') {
    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    )?.matches;

    return prefersReducedMotion ? 'auto' : 'smooth';
  }

  return 'auto';
}

/**
 * Scrolls the toggle container so that `child` is fully visible on the main axis
 * (horizontal: overflow-x, vertical: overflow-y). No-op if there is no overflow
 * or the child is already fully in view.
 */
export function scrollToggleOptionIntoView(
  container: HTMLElement,
  child: HTMLElement,
  orientation: ToggleOrientation,
  behavior: ScrollToggleIntoViewBehavior = 'smooth',
): void {
  const overflowX = container.scrollWidth > container.clientWidth + 1;
  const overflowY = container.scrollHeight > container.clientHeight + 1;

  const horizontal = orientation !== 'vertical';
  if (horizontal && !overflowX) {
    return;
  }

  if (!horizontal && !overflowY) {
    return;
  }

  const cr = container.getBoundingClientRect();
  const tr = child.getBoundingClientRect();

  const resolved = resolveBehavior(behavior);

  if (horizontal) {
    const overLeft = tr.left < cr.left;
    const overRight = tr.right > cr.right;
    if (!overLeft && !overRight) {
      return;
    }
    let delta = 0;
    if (overLeft && overRight) {
      delta = tr.left - cr.left;
    } else if (overLeft) {
      delta = tr.left - cr.left;
    } else {
      delta = tr.right - cr.right;
    }
    container.scrollTo({
      left: container.scrollLeft + delta,
      behavior: resolved,
    });

    return;
  }

  const overTop = tr.top < cr.top;
  const overBottom = tr.bottom > cr.bottom;
  if (!overTop && !overBottom) {
    return;
  }
  let delta = 0;
  if (overTop && overBottom) {
    delta = tr.top - cr.top;
  } else if (overTop) {
    delta = tr.top - cr.top;
  } else {
    delta = tr.bottom - cr.bottom;
  }
  container.scrollTo({
    top: container.scrollTop + delta,
    behavior: resolved,
  });
}
