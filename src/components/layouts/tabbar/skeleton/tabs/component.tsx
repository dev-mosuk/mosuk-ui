import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../component.module.css';
import { TabbarTabsSkeletonProps } from './component.interface';

export function TabbarTabsSkeleton<C extends ElementType = 'nav'>({
  ...rest
}: TabbarTabsSkeletonProps<C>) {
  const Component = (rest?.as || 'nav') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-tabbar-tabs-skeleton',
        styles.tabs,
        rest?.className
      )}
    >
      {rest?.children}
    </Component>
  );
}
