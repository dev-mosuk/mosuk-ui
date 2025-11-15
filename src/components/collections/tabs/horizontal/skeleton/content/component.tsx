import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../component.module.css';
import {
  TabsHorizontalContentSkeletonProps
} from './component.interface';

export function TabsHorizontalContentSkeleton<C extends ElementType = 'section'>({
  as,
  ...rest
}: TabsHorizontalContentSkeletonProps<C>) {
  const Component = (as || 'section') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-tabs-horizontal-content-skeleton',
        styles.content,
        rest?.className
      )}
    >
      {rest?.children}
    </Component>
  );
}
