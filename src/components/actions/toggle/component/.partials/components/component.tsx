import { ToggleProps } from '@/components/actions/toggle/component/.partials/components/component.props';
import { ToggleProvider } from '@/components/actions/toggle/component/.partials/providers/provider';
import styles from '@/components/actions/toggle/component/.partials/styles/component.module.css';
import { scrollToggleOptionIntoView } from '@/components/actions/toggle/component/.partials/utilities/scroll-toggle-option-into-view';
import classNames from 'classnames';
import React, { ElementType, useCallback, useEffect, useRef } from 'react';

export function Toggle<C extends ElementType = 'div'>({
  as,
  value,
  onChange,
  orientation = 'horizontal',
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

      const overflowsHorizontally =
        containerEl.scrollWidth > containerEl.clientWidth;
      const overflowsVertically =
        containerEl.scrollHeight > containerEl.clientHeight;
      const overflows =
        orientation === 'vertical'
          ? overflowsVertically
          : overflowsHorizontally;

      if (!overflows) {
        return;
      }

      const optionEl = (e.target as HTMLElement)?.closest?.(
        '.mosuk-toggle-button',
      ) as HTMLElement | null;

      if (!optionEl || !containerEl.contains(optionEl)) {
        return;
      }

      requestAnimationFrame(() => {
        scrollToggleOptionIntoView(
          containerEl,
          optionEl,
          orientation,
          'smooth',
        );
      });
    },
    [onClickCapture, orientation],
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
    <ToggleProvider
      value={value}
      onChange={onChange}
      containerRef={containerRef}
      orientation={orientation}
    >
      <Component
        {...rest}
        ref={setRef}
        data-orientation={orientation}
        onClickCapture={handleClickCapture}
        className={classNames('mosuk-toggle', styles.toggle, className)}
      >
        {rest?.children}
      </Component>
    </ToggleProvider>
  );
}
