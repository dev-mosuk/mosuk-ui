import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../component.module.css';
import {
  TabsVerticalContentSkeletonProps
} from './component.interface';

export function TabsVerticalContentSkeleton<C extends ElementType = 'section'>({
  as,
  ...rest
}: TabsVerticalContentSkeletonProps<C>) {
  const Component = (as || 'section') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-tabs-vertical-content-skeleton',
        styles.content,
        rest?.className
      )}
    >
      {rest?.children}
    </Component>
  );
}
