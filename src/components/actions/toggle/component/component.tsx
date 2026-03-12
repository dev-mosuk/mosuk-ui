import classNames from 'classnames';
import React, { ElementType, useCallback, useEffect, useRef } from 'react';
import styles from './component.module.css';
import { ToggleProps } from './component.props';
import { ToggleProvider } from './providers/provider';

export function Toggle<C extends ElementType = 'div'>({
  as,
  value,
  onChange,
  className,
  onClickCapture,
  ref,
  ...rest
}: ToggleProps<C>) {
  const Component = (as || 'div') as ElementType;
  const containerRef = useRef<HTMLElement | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(
    () => () => {
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
    },
    [],
  );

  const handleClickCapture = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onClickCapture?.(e);
      if (e.defaultPrevented || !containerRef.current) {
        return;
      }

      const containerEl = containerRef.current;

      if (containerEl.scrollWidth <= containerEl.clientWidth) {
        return;
      }

      const optionEl = (e.target as HTMLElement)?.closest?.(
        '.mosuk-toggle-button',
      ) as HTMLElement | null;

      if (!optionEl || !containerEl.contains(optionEl)) {
        return;
      }

      requestAnimationFrame(() => {
        const prefersReducedMotion = window.matchMedia?.(
          '(prefers-reduced-motion: reduce)',
        )?.matches;
        optionEl.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'nearest',
          inline: 'nearest',
        });
      });
    },
    [onClickCapture],
  );

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      }
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
      if (node) {
        node.style.setProperty(
          '--toggle-padding',
          getComputedStyle(node).paddingTop,
        );

        resizeObserverRef.current = new ResizeObserver(() => {
          node.style.setProperty(
            '--toggle-padding',
            getComputedStyle(node).paddingTop,
          );
        });
        resizeObserverRef.current.observe(node);
      }
    },
    [ref],
  );

  useEffect(() => {
    const el = containerRef.current;

    if (el) {
      el.style.setProperty('--toggle-padding', getComputedStyle(el).paddingTop);
    }
  }, [className]);

  return (
    <ToggleProvider value={value} onChange={onChange} containerRef={containerRef}>
      <Component
        {...rest}
        ref={setRef}
        onClickCapture={handleClickCapture}
        className={classNames('mosuk-toggle', styles.toggle, className)}
      >
        {rest?.children}
      </Component>
    </ToggleProvider>
  );
}
