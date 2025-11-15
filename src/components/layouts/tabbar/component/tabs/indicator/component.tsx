import classNames from 'classnames';
import React, { ElementType, useContext, useEffect, useRef } from 'react';

import styles from '../../component.module.css';
import { TabbarTabsContext } from '../context/component';
import { TabbarTabsIndicatorProps } from './component.interface';

export function TabbarTabsIndicator<C extends ElementType = 'span'>({
  as,
  ref,
  ...rest
}: TabbarTabsIndicatorProps<C>) {
  const Component = (rest?.as || 'span') as ElementType;
  const context = useContext(TabbarTabsContext);
  const indicatorRef = useRef<HTMLDivElement>(null);

  if (!context) {
    throw new Error('TabbarTabsTab must be used within a TabbarTabs');
  }

  const activeIndex = context?.activeIndex ?? -1;
  const tabCount = context?.tabCount ?? 0;

  useEffect(() => {
    if (!indicatorRef.current) return;
    if (tabCount <= 0 || activeIndex < 0) return;

    let rafRead: number | null = null;
    let rafWrite: number | null = null;

    const scheduleUpdate = () => {
      if (rafRead !== null || rafWrite !== null) return;

      rafRead = requestAnimationFrame(() => {
        rafRead = null;

        const el = indicatorRef.current;
        if (!el) return;

        const tabsContainer = el.parentElement;
        if (!tabsContainer) return;

        const tabElements = Array.from(tabsContainer.children).filter(
          (child) => child !== el && child.classList.contains('mosuk-tabbar-tabs-tab')
        ) as HTMLElement[];

        if (tabElements.length === 0 || activeIndex >= tabElements.length) return;

        const activeTab = tabElements[activeIndex];
        if (!activeTab) return;

        const containerRect = tabsContainer.getBoundingClientRect();
        const activeTabRect = activeTab.getBoundingClientRect();

        const nextOffsetLeft = activeTabRect.left - containerRect.left;
        const nextWidth = activeTabRect.width;

        rafWrite = requestAnimationFrame(() => {
          rafWrite = null;
          const node = indicatorRef.current;
          if (!node) return;
          node.style.setProperty('--indicator-offset', `${nextOffsetLeft}px`);
          node.style.setProperty('--indicator-width', `${nextWidth}px`);
        });
      });
    };

    // initial position
    scheduleUpdate();

    // update on resize
    const handleResize = () => scheduleUpdate();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafRead) cancelAnimationFrame(rafRead);
      if (rafWrite) cancelAnimationFrame(rafWrite);
    };
  }, [activeIndex, tabCount]);

  if (tabCount <= 0 || activeIndex < 0) {
    return null;
  }

  return (
    <Component
      {...rest}
      ref={indicatorRef}
      className={classNames(
        'mosuk-tabbar-tabs-indicator',
        styles.indicator,
        rest?.className
      )}
    >
      {rest?.children}
    </Component>
  );
}
