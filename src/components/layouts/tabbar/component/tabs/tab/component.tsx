import classNames from 'classnames';
import React, { ElementType, useContext, useEffect, useRef } from 'react';
import styles from '../../component.module.css';
import { TabbarTabsContext } from '../context/component';
import { TabbarTabsTabProps } from './component.interface';

export function TabbarTabsTab<C extends ElementType = 'a'>({
  as,
  isActive,
  ...rest
}: TabbarTabsTabProps<C>) {
  const Component = (as || 'a') as ElementType;
  const context = useContext(TabbarTabsContext);
  const tabIndexRef = useRef<number | null>(null);

  if (!context) {
    throw new Error('TabbarTabsTab must be used within a TabbarTabs');
  }

  useEffect(() => {
    const index = context.registerTab();
    tabIndexRef.current = index;

    return () => {
      if (tabIndexRef.current !== null) {
        context.unregisterTab(tabIndexRef.current);
      }
    };
  }, [context]);

  const isLinkActive = isActive;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-tabbar-tabs-tab',
        {
          [styles.tab]: true,
          [styles.active]: isLinkActive,
        },
        rest.className
      )}
    >
      {rest?.children}
    </Component>
  );
}
