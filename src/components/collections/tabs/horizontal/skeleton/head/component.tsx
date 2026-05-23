import styles from '@/components/collections/tabs/horizontal/skeleton/component.module.css';
import { TabsHorizontalHeadSkeletonProps } from '@/components/collections/tabs/horizontal/skeleton/head/component.interface';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
