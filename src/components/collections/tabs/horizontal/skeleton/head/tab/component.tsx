import styles from '@/components/collections/tabs/horizontal/skeleton/component.module.css';
import { TabsHorizontalHeadTabSkeletonProps } from '@/components/collections/tabs/horizontal/skeleton/head/tab/component.interface';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
