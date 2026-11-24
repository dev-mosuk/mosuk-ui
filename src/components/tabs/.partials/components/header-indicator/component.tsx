'use client';

import { Button } from '@/components/button';
import { TabsHeaderIndicatorProps } from '@/components/tabs/.partials/components/header-indicator/component.interface';
import { TABS_DEFAULT_SIZE } from '@/components/tabs/.partials/constants/component.constants';
import { useTabs } from '@/components/tabs/.partials/hooks/hook';
import styles from '@/components/tabs/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {
  CSSProperties,
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

function readLayout(list: HTMLElement, tab: HTMLElement): IndicatorLayout {
  const listRect = list.getBoundingClientRect();
  const tabRect = tab.getBoundingClientRect();

  return {
    left: tabRect.left - listRect.left - list.clientLeft + list.scrollLeft,
    top: tabRect.top - listRect.top - list.clientTop + list.scrollTop,
    width: tabRect.width,
    height: tabRect.height,
  };
}

export function TabsHeaderIndicator<C = 'figure'>({
  as,
  className,
  style,
  size: sizeProp,
  ref,
  ...rest
}: TabsHeaderIndicatorProps<C>) {
  const { size: tabsSize } = useTabs();
  const parentSize = tabsSize ?? TABS_DEFAULT_SIZE;
  const indicatorSize = sizeProp ?? Math.max(1, parentSize - 0.25);

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
        '.mosuk-tabs-header-item[data-active], .mosuk-tabs-header-item[aria-selected="true"]',
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
    <Button
      {...(rest as Button.Props<C>)}
      as={(as ?? 'figure') as C}
      ref={setRefs}
      size={indicatorSize}
      variant={rest.variant ?? Button.ENUMS.Variant.Ghost}
      press={rest.press ?? Button.ENUMS.Press.None}
      role='presentation'
      data-active={active ? '' : undefined}
      style={indicatorStyle}
      className={classNames(
        'mosuk-tabs-header-indicator',
        styles.headerIndicator,
        !active && styles.inactive,
        className,
      )}
    />
  );
}
