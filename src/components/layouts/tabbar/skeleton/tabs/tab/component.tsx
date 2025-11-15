import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../component.module.css';
import { TabbarTabsTabSkeletonProps } from './component.interface';

export function TabbarTabsTabSkeleton<C extends ElementType = 'a'>({
  as,
  isActive,
  ...rest
}: TabbarTabsTabSkeletonProps<C>) {
  const Component = (as || 'a') as ElementType;

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
        rest?.className
      )}
    >
      {rest?.children}
    </Component>
  );
}
