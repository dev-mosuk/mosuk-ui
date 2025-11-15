import classNames from 'classnames';
import React, { ElementType } from 'react';
import { TabsVerticalSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function TabsVerticalSkeleton<C extends ElementType = 'div'>({
  as,
  ...rest
}: TabsVerticalSkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-tabs-vertical-skeleton',
        styles.tabs,
        rest?.className
      )}
    >
      {rest?.children}
    </Component>
  );
}
