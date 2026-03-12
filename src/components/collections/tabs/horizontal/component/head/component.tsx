import { Tabs as TabsComponent } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';
import styles from '../component.module.css';
import { TabsHorizontalHeadProps } from './component.interface';

const SCROLL_PADDING = 16;
const SCROLL_DELAY = 200;
const ANIMATION_DURATION = 600;
const MIN_LOOKAHEAD = 80;
const LOOKAHEAD_MULTIPLIER = 1.25;
const ADJACENT_TABS_COUNT = 2;

const sumAdjacentTabsWidth = (
  tabEl: HTMLElement,
  dir: 'prev' | 'next'
): number => {
  let sum = 0;
  let count = 0;
  let node =
    dir === 'next' ? tabEl.nextElementSibling : tabEl.previousElementSibling;

  while (node && count < ADJACENT_TABS_COUNT) {
    if (node.getAttribute('role') === 'tab') {
      sum += (node as HTMLElement).offsetWidth;
      count++;
    }
    node = dir === 'next' ? node.nextElementSibling : node.previousElementSibling;
  }

  return sum;
};

export const TabsHorizontalHead = React.forwardRef<
  React.ElementRef<typeof TabsComponent.List>,
  TabsHorizontalHeadProps
>(function TabsHorizontalHead(props, forwardedRef) {
  const { className, children, onClickCapture, ...rest } = props;

  const listRef = React.useRef<HTMLElement | null>(null);
  const timeoutRef = React.useRef<number | null>(null);
  const rafRef = React.useRef<number | null>(null);

  const stopAnimations = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  React.useEffect(() => stopAnimations, [stopAnimations]);

  const animateScrollLeft = React.useCallback(
    (el: HTMLElement, toLeft: number) => {
      const prefersReducedMotion = window.matchMedia?.(
        '(prefers-reduced-motion: reduce)'
      )?.matches;

      if (prefersReducedMotion || Math.abs(el.scrollLeft - toLeft) < 1) {
        el.scrollLeft = toLeft;
        return;
      }

      const fromLeft = el.scrollLeft;
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / ANIMATION_DURATION);
        const eased = t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2;
        el.scrollLeft = fromLeft + (toLeft - fromLeft) * eased;
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    },
    []
  );

  const handleClickCapture = React.useCallback<
    NonNullable<TabsHorizontalHeadProps['onClickCapture']>
  >(
    (e) => {
      onClickCapture?.(e);
      if (e.defaultPrevented || !listRef.current) return;

      const listEl = listRef.current;
      if (listEl.scrollWidth <= listEl.clientWidth) return;

      const tabEl = (e.target as HTMLElement)?.closest?.(
        '[role="tab"]'
      ) as HTMLElement | null;
      if (!tabEl || !listEl.contains(tabEl)) return;

      stopAnimations();

      timeoutRef.current = window.setTimeout(() => {
        const lookahead =
          sumAdjacentTabsWidth(tabEl, 'next') ||
          Math.max(MIN_LOOKAHEAD, tabEl.offsetWidth * LOOKAHEAD_MULTIPLIER);
        const lookbehind = sumAdjacentTabsWidth(tabEl, 'prev');

        const viewLeft = listEl.scrollLeft;
        const viewRight = viewLeft + listEl.clientWidth;
        const tabLeft = tabEl.offsetLeft;
        const tabRight = tabLeft + tabEl.offsetWidth;

        let nextLeft = viewLeft;

        if (tabRight + lookahead + SCROLL_PADDING > viewRight - SCROLL_PADDING) {
          nextLeft = tabRight + lookahead + SCROLL_PADDING - listEl.clientWidth + SCROLL_PADDING;
        }
        if (tabLeft - lookbehind - SCROLL_PADDING < viewLeft + SCROLL_PADDING) {
          nextLeft = tabLeft - lookbehind - SCROLL_PADDING;
        }

        nextLeft = Math.max(
          0,
          Math.min(nextLeft, listEl.scrollWidth - listEl.clientWidth)
        );
        animateScrollLeft(listEl, nextLeft);
      }, SCROLL_DELAY);
    },
    [animateScrollLeft, onClickCapture, stopAnimations]
  );

  return (
    <TabsComponent.List
      {...rest}
      ref={(node) => {
        listRef.current = node as HTMLElement | null;
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      }}
      onClickCapture={handleClickCapture}
      className={classNames('mosuk-tabs-horizontal-head', styles.head, className)}
    >
      {children}
    </TabsComponent.List>
  );
});
