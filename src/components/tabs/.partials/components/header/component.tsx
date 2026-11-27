'use client';

import { TabsHeaderProps } from '@/components/tabs/.partials/components/header/component.interface';
import { useTabs } from '@/components/tabs/.partials/hooks/hook';
import styles from '@/components/tabs/.partials/styles/component.module.css';
import { scrollTabsOptionIntoView } from '@/components/tabs/.partials/utilities/scroll-tabs-option-into-view';
import { Tabs as BaseUiTabs } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React, {
  createElement,
  useCallback,
  useEffect,
  useRef,
  type ElementType,
} from 'react';

function scrollActiveIntoView(
  list: HTMLElement | null,
  orientation: 'horizontal' | 'vertical',
  behavior: 'auto' | 'smooth',
) {
  if (!list) {
    return;
  }

  const active = list.querySelector(
    '.mosuk-tabs-header-item[data-active]',
  ) as HTMLElement | null;

  if (!active) {
    return;
  }

  scrollTabsOptionIntoView(list, active, orientation, behavior);
}

export function TabsHeader<C = 'div'>({
  as,
  activateOnFocus,
  loopFocus,
  className,
  style,
  onClickCapture,
  ref,
  children,
  ...rest
}: TabsHeaderProps<C>) {
  const {
    size,
    orientation,
    variant,
    value,
    activateOnFocus: rootActivateOnFocus,
    loopFocus: rootLoopFocus,
  } = useTabs();
  const listRef = useRef<HTMLElement | null>(null);
  const orientationRef = useRef(orientation);
  orientationRef.current = orientation;
  const resolvedActivateOnFocus = activateOnFocus ?? rootActivateOnFocus;
  const resolvedLoopFocus = loopFocus ?? rootLoopFocus;

  const setListRef = useCallback(
    (node: HTMLElement | null) => {
      listRef.current = node;

      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      }
    },
    [ref],
  );

  const handleClickCapture = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onClickCapture?.(e);
      if (e.defaultPrevented || !listRef.current) {
        return;
      }

      const list = listRef.current;
      const overflowsHorizontally = list.scrollWidth > list.clientWidth;
      const overflowsVertically = list.scrollHeight > list.clientHeight;
      const overflows =
        orientation === 'vertical'
          ? overflowsVertically
          : overflowsHorizontally;

      if (!overflows) {
        return;
      }

      const optionEl = (e.target as HTMLElement)?.closest?.(
        '.mosuk-tabs-header-item',
      ) as HTMLElement | null;

      if (!optionEl || !list.contains(optionEl)) {
        return;
      }

      requestAnimationFrame(() => {
        scrollTabsOptionIntoView(list, optionEl, orientation, 'smooth');
      });
    },
    [onClickCapture, orientation],
  );

  useEffect(() => {
    const list = listRef.current;
    if (!list) {
      return;
    }

    const runPassiveScroll = () => {
      scrollActiveIntoView(list, orientationRef.current, 'auto');
    };

    const resizeObserver = new ResizeObserver(runPassiveScroll);
    resizeObserver.observe(list);

    const mutationObserver = new MutationObserver(runPassiveScroll);
    mutationObserver.observe(list, { childList: true, subtree: true });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      scrollActiveIntoView(listRef.current, orientation, 'smooth');
    });
  }, [value, orientation]);

  const listRender = as ? createElement(as as ElementType) : undefined;

  return (
    <BaseUiTabs.List
      {...rest}
      ref={setListRef}
      render={listRender}
      activateOnFocus={resolvedActivateOnFocus}
      loopFocus={resolvedLoopFocus}
      onClickCapture={handleClickCapture}
      data-size={size != null ? size : undefined}
      data-variant={variant}
      data-orientation={orientation}
      style={style}
      className={classNames('mosuk-tabs-header', styles.header, className)}
    >
      {children}
    </BaseUiTabs.List>
  );
}
