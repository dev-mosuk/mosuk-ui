import classNames from 'classnames';
import React, { ElementType } from 'react';
import { TabbarSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function TabbarSkeleton<C extends ElementType = 'aside'>({
  tabbar,
  ...rest
}: TabbarSkeletonProps<C>) {
  const Component = (rest?.as || 'aside') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-tabbar-skeleotn', styles.tabbar, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
