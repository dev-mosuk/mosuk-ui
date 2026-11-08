'use client';

import { ToggleIndicatorProps } from '@/components/actions/toggle/component/.partials/components/indicator/component.interface';
import styles from '@/components/actions/toggle/component/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  CSSProperties,
  ElementType,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

type IndicatorLayout = {
  left: number;
  top: number;
  width: number;
  height: number;
};

function readLayout(
  list: HTMLElement,
  tab: HTMLElement,
): IndicatorLayout {
  const listRect = list.getBoundingClientRect();
  const tabRect = tab.getBoundingClientRect();
  const listWidth = list.offsetWidth || listRect.width;
  const listHeight = list.offsetHeight || listRect.height;
  const scaleX = listWidth > 0 ? listRect.width / listWidth : 1;
  const scaleY = listHeight > 0 ? listRect.height / listHeight : 1;

  let left = tab.offsetLeft;
  let top = tab.offsetTop;

  if (Math.abs(scaleX) > Number.EPSILON && Math.abs(scaleY) > Number.EPSILON) {
    left =
      (tabRect.left - listRect.left) / scaleX +
      list.scrollLeft -
      list.clientLeft;
    top =
      (tabRect.top - listRect.top) / scaleY + list.scrollTop - list.clientTop;
  }

  return {
    left,
    top,
    width: tab.offsetWidth,
    height: tab.offsetHeight,
  };
}

export function ToggleIndicator<C extends ElementType = 'span'>({
  as,
  className,
  style,
  ref,
  ...rest
}: ToggleIndicatorProps<C>) {
  const Component = (as || 'span') as ElementType;
  const nodeRef = useRef<HTMLElement | null>(null);
  const lastLayoutRef = useRef<IndicatorLayout | null>(null);
  const [active, setActive] = useState(false);
  const [layout, setLayout] = useState<IndicatorLayout | null>(null);

  const setRefs = useCallback(
    (node: HTMLElement | null) => {
      nodeRef.current = node;

      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      }
    },
    [ref],
  );

  useLayoutEffect(() => {
    const node = nodeRef.current;
    const list = node?.closest('[role="tablist"]') as HTMLElement | null;

    if (!node || !list) {
      return;
    }

    const update = () => {
      const tab = list.querySelector(
        '.mosuk-toggle-button[data-active], .mosuk-toggle-button[aria-selected="true"]',
      ) as HTMLElement | null;

      if (!tab || tab.offsetWidth <= 0 || tab.offsetHeight <= 0) {
        setActive(false);
        return;
      }

      const next = readLayout(list, tab);
      lastLayoutRef.current = next;
      setLayout(next);
      setActive(true);
    };

    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(list);

    const mutationObserver = new MutationObserver(update);
    mutationObserver.observe(list, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['data-active', 'aria-selected', 'data-orientation'],
    });

    list.addEventListener('scroll', update, { passive: true });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      list.removeEventListener('scroll', update);
    };
  }, []);

  const resolved = layout ?? lastLayoutRef.current;

  const indicatorStyle: CSSProperties = {
    ...style,
    ...(resolved
      ? {
          ['--active-tab-left' as string]: `${resolved.left}px`,
          ['--active-tab-top' as string]: `${resolved.top}px`,
          ['--active-tab-width' as string]: `${resolved.width}px`,
          ['--active-tab-height' as string]: `${resolved.height}px`,
        }
      : null),
  };

  return (
    <Component
      {...rest}
      ref={setRefs}
      role="presentation"
      data-active={active ? '' : undefined}
      style={indicatorStyle}
      className={classNames(
        'mosuk-toggle-indicator',
        styles.indicator,
        !active && styles.inactive,
        className,
      )}
    />
  );
}
