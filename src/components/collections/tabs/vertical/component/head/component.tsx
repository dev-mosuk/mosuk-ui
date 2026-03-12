import { Tabs as TabsComponent } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React from 'react';
import styles from '../component.module.css';
import { TabsVerticalHeadProps } from './component.interface';

const SCROLL_PADDING = 16;
const SCROLL_DELAY = 200;
const ANIMATION_DURATION = 600;
const MIN_LOOKAHEAD = 80;
const LOOKAHEAD_MULTIPLIER = 1.25;
const ADJACENT_TABS_COUNT = 2;

const sumAdjacentTabsHeight = (
  tabEl: HTMLElement,
  dir: 'prev' | 'next'
): number => {
  let sum = 0;
  let count = 0;
  let node =
    dir === 'next' ? tabEl.nextElementSibling : tabEl.previousElementSibling;

  while (node && count < ADJACENT_TABS_COUNT) {
    if (node.getAttribute('role') === 'tab') {
      sum += (node as HTMLElement).offsetHeight;
      count++;
    }
    node = dir === 'next' ? node.nextElementSibling : node.previousElementSibling;
  }

  return sum;
};

export const TabsVerticalHead = React.forwardRef<
  React.ElementRef<typeof TabsComponent.List>,
  TabsVerticalHeadProps
>(function TabsVerticalHead(props, forwardedRef) {
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

  const animateScrollTop = React.useCallback(
    (el: HTMLElement, toTop: number) => {
      const prefersReducedMotion = window.matchMedia?.(
        '(prefers-reduced-motion: reduce)'
      )?.matches;

      if (prefersReducedMotion || Math.abs(el.scrollTop - toTop) < 1) {
        el.scrollTop = toTop;
        return;
      }

      const fromTop = el.scrollTop;
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / ANIMATION_DURATION);
        const eased = t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2;
        el.scrollTop = fromTop + (toTop - fromTop) * eased;
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    },
    []
  );

  const handleClickCapture = React.useCallback<
    NonNullable<TabsVerticalHeadProps['onClickCapture']>
  >(
    (e) => {
      onClickCapture?.(e);
      if (e.defaultPrevented || !listRef.current) return;

      const listEl = listRef.current;
      if (listEl.scrollHeight <= listEl.clientHeight) return;

      const tabEl = (e.target as HTMLElement)?.closest?.(
        '[role="tab"]'
      ) as HTMLElement | null;
      if (!tabEl || !listEl.contains(tabEl)) return;

      stopAnimations();

      timeoutRef.current = window.setTimeout(() => {
        const lookahead =
          sumAdjacentTabsHeight(tabEl, 'next') ||
          Math.max(MIN_LOOKAHEAD, tabEl.offsetHeight * LOOKAHEAD_MULTIPLIER);
        const lookbehind = sumAdjacentTabsHeight(tabEl, 'prev');

        const viewTop = listEl.scrollTop;
        const viewBottom = viewTop + listEl.clientHeight;
        const tabTop = tabEl.offsetTop;
        const tabBottom = tabTop + tabEl.offsetHeight;

        let nextTop = viewTop;

        if (tabBottom + lookahead + SCROLL_PADDING > viewBottom - SCROLL_PADDING) {
          nextTop = tabBottom + lookahead + SCROLL_PADDING - listEl.clientHeight + SCROLL_PADDING;
        }
        if (tabTop - lookbehind - SCROLL_PADDING < viewTop + SCROLL_PADDING) {
          nextTop = tabTop - lookbehind - SCROLL_PADDING;
        }

        nextTop = Math.max(
          0,
          Math.min(nextTop, listEl.scrollHeight - listEl.clientHeight)
        );
        animateScrollTop(listEl, nextTop);
      }, SCROLL_DELAY);
    },
    [animateScrollTop, onClickCapture, stopAnimations]
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
      className={classNames('mosuk-tabs-vertical-head', styles.head, className)}
    >
      {children}
    </TabsComponent.List>
  );
});
