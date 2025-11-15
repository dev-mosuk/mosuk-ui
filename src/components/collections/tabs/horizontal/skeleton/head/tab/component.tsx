import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../component.module.css';
import { TabsHorizontalHeadTabSkeletonProps } from './component.interface';

export function TabsHorizontalHeadTabSkeleton<C extends ElementType = 'span'>({
  as,
  ...rest
}: TabsHorizontalHeadTabSkeletonProps<C>) {
  const Component = (as || 'span') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-tabs-horizontal-head-tab-skeleton',
        styles.tab,
        rest?.className
      )}
    >
      {rest?.children}
    </Component>
  );
}
