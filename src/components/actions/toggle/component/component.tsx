import classNames from 'classnames';
import React, {
  ElementType,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import styles from './component.module.css';
import { ToggleProps } from './component.props';
import { ToggleProvider } from './provider/provider';

const SCROLL_PADDING = 16;
const SCROLL_DELAY = 200;
const ANIMATION_DURATION = 600;
const MIN_LOOKAHEAD = 80;
const LOOKAHEAD_MULTIPLIER = 1.25;
const ADJACENT_OPTIONS_COUNT = 2;

export const Toggle = forwardRef(function Toggle<C extends ElementType = 'div'>(
  props: ToggleProps<C>,
  forwardedRef: React.ForwardedRef<HTMLElement>,
) {
  const { as, value, onChange, className, onClickCapture, ...rest } = props;
  const Component = (as || 'div') as ElementType;
  const containerRef = useRef<HTMLElement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const stopAnimations = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  useEffect(() => () => stopAnimations(), [stopAnimations]);

  const animateScrollLeft = useCallback((el: HTMLElement, toLeft: number) => {
    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
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
  }, []);

  const handleClickCapture = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onClickCapture?.(e);
      if (e.defaultPrevented || !containerRef.current) return;

      const containerEl = containerRef.current;
      if (containerEl.scrollWidth <= containerEl.clientWidth) return;

      const optionEl = (e.target as HTMLElement)?.closest?.(
        '.mosuk-toggle-button',
      ) as HTMLElement | null;
      if (!optionEl || !containerEl.contains(optionEl)) return;

      stopAnimations();

      timeoutRef.current = window.setTimeout(() => {
        const lookahead =
          sumAdjacentOptionsWidth(optionEl, 'next') ||
          Math.max(MIN_LOOKAHEAD, optionEl.offsetWidth * LOOKAHEAD_MULTIPLIER);
        const lookbehind = sumAdjacentOptionsWidth(optionEl, 'prev');

        const viewLeft = containerEl.scrollLeft;
        const viewRight = viewLeft + containerEl.clientWidth;
        const optionLeft = optionEl.offsetLeft;
        const optionRight = optionLeft + optionEl.offsetWidth;

        let nextLeft = viewLeft;

        if (
          optionRight + lookahead + SCROLL_PADDING >
          viewRight - SCROLL_PADDING
        ) {
          nextLeft =
            optionRight +
            lookahead +
            SCROLL_PADDING -
            containerEl.clientWidth +
            SCROLL_PADDING;
        }
        if (
          optionLeft - lookbehind - SCROLL_PADDING <
          viewLeft + SCROLL_PADDING
        ) {
          nextLeft = optionLeft - lookbehind - SCROLL_PADDING;
        }

        nextLeft = Math.max(
          0,
          Math.min(nextLeft, containerEl.scrollWidth - containerEl.clientWidth),
        );
        animateScrollLeft(containerEl, nextLeft);
      }, SCROLL_DELAY);
    },
    [animateScrollLeft, onClickCapture, stopAnimations],
  );

  return (
    <ToggleProvider value={value} onChange={onChange}>
      <Component
        {...rest}
        ref={(node: HTMLElement | null) => {
          containerRef.current = node;
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            (forwardedRef as { current: HTMLElement | null }).current = node;
          }
        }}
        onClickCapture={handleClickCapture}
        className={classNames('mosuk-toggle', styles.toggle, className)}
      >
        {rest?.children}
      </Component>
    </ToggleProvider>
  );
});

const sumAdjacentOptionsWidth = (
  optionEl: HTMLElement,
  dir: 'prev' | 'next',
): number => {
  let sum = 0;
  let count = 0;
  let node =
    dir === 'next'
      ? optionEl.nextElementSibling
      : optionEl.previousElementSibling;

  while (node && count < ADJACENT_OPTIONS_COUNT) {
    if (node.classList.contains('mosuk-toggle-button')) {
      sum += (node as HTMLElement).offsetWidth;
      count++;
    }

    node =
      dir === 'next' ? node.nextElementSibling : node.previousElementSibling;
  }

  return sum;
};
