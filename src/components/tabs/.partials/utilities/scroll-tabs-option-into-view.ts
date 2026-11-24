import type { TabsOrientation } from '@/components/tabs/.partials/enums/component.enums';

export type ScrollTabsIntoViewBehavior = 'auto' | 'smooth';

function resolveBehavior(
  behavior: ScrollTabsIntoViewBehavior,
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
 * Scrolls the tabs header so that a partially visible `child` sits near the
 * center of the viewport on the main axis. No-op if there is no overflow or
 * the child is already fully in view.
 */
export function scrollTabsOptionIntoView(
  container: HTMLElement,
  child: HTMLElement,
  orientation: TabsOrientation | `${TabsOrientation}`,
  behavior: ScrollTabsIntoViewBehavior = 'smooth',
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

    const childCenter = (tr.left + tr.right) / 2;
    const containerCenter = (cr.left + cr.right) / 2;
    const delta = childCenter - containerCenter;
    const max = container.scrollWidth - container.clientWidth;

    container.scrollTo({
      left: Math.min(max, Math.max(0, container.scrollLeft + delta)),
      behavior: resolved,
    });

    return;
  }

  const overTop = tr.top < cr.top;
  const overBottom = tr.bottom > cr.bottom;
  if (!overTop && !overBottom) {
    return;
  }

  const childCenter = (tr.top + tr.bottom) / 2;
  const containerCenter = (cr.top + cr.bottom) / 2;
  const delta = childCenter - containerCenter;
  const max = container.scrollHeight - container.clientHeight;

  container.scrollTo({
    top: Math.min(max, Math.max(0, container.scrollTop + delta)),
    behavior: resolved,
  });
}
