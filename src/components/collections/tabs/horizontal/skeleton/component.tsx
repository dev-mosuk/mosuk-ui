import { TabsHorizontalSkeletonProps } from '@/components/collections/tabs/horizontal/skeleton/component.interface';
import styles from '@/components/collections/tabs/horizontal/skeleton/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
