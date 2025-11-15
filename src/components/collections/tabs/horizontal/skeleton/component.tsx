import classNames from 'classnames';
import React, { ElementType } from 'react';
import { TabsHorizontalSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function TabsHorizontalSkeleton<C extends ElementType = 'div'>({
  as,
  ...rest
}: TabsHorizontalSkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-tabs-horizontal-skeleton',
        styles.tabs,
        rest?.className
      )}
    >
      {rest?.children}
    </Component>
  );
}
