import classNames from 'classnames';
import React, { Children, ElementType, isValidElement, ReactElement, useCallback, useMemo, useState } from 'react';
import styles from '../component.module.css';
import { TabbarTabsProps } from './component.interface';
import { TabbarTabsContext } from './context/component';
import { TabbarTabsTab } from './tab/component';

export function TabbarTabs<C extends ElementType = 'nav'>({
  ...rest
}: TabbarTabsProps<C>) {
  const Component = (rest?.as || 'nav') as ElementType;
  const [tabs, setTabs] = useState<number[]>([]);

  const registerTab = useCallback(() => {
    const newIndex = tabs.length;
    setTabs((prev) => [...prev, newIndex]);
    return newIndex;
  }, [tabs.length]);

  const unregisterTab = useCallback((index: number) => {
    setTabs((prev) => prev.filter((i) => i !== index));
  }, []);

  const tabCount = Children.toArray(rest?.children).filter(
    (child) => isValidElement(child) && child.type === TabbarTabsTab
  ).length;

  const activeIndex = Children.toArray(rest?.children).findIndex(
    (child) => {
      if (isValidElement(child)) {
        const element = child as ReactElement<{ isActive?: boolean }>;
        return element.props.isActive;
      }
      return false;
    }
  );

  const contextValue = useMemo(
    () => ({
      registerTab,
      unregisterTab,
      activeIndex,
      tabCount
    }),
    [registerTab, unregisterTab, activeIndex, tabCount]
  );

  return (
    <TabbarTabsContext.Provider value={contextValue}>
      <Component
        {...rest}
        className={classNames('mosuk-tabbar-tabs', styles.tabs, rest?.className)}
      >
        {rest?.children}
      </Component>
    </TabbarTabsContext.Provider>
  );
}
