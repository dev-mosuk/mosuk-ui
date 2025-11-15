import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../component.module.css';
import { TabsHorizontalHeadSkeletonProps } from './component.interface';

export function TabsHorizontalHeadSkeleton<C extends ElementType = 'nav'>({
  as,
  ...rest
}: TabsHorizontalHeadSkeletonProps<C>) {
  const Component = (as || 'nav') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-tabs-horizontal-head-skeleton',
        styles.head,
        rest?.className
      )}
    >
      {rest?.children}
    </Component>
  );
}
