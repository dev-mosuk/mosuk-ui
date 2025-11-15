import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../component.module.css';
import { TabsVerticalHeadSkeletonProps } from './component.interface';

export function TabsVerticalHeadSkeleton<C extends ElementType = 'nav'>({
  as,
  ...rest
}: TabsVerticalHeadSkeletonProps<C>) {
  const Component = (as || 'nav') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-tabs-vertical-head-skeleton',
        styles.head,
        rest?.className
      )}
    >
      {rest?.children}
    </Component>
  );
}
