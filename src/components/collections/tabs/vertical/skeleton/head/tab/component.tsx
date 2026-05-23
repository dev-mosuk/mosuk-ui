import styles from '@/components/collections/tabs/vertical/skeleton/component.module.css';
import { TabsVerticalHeadTabSkeletonProps } from '@/components/collections/tabs/vertical/skeleton/head/tab/component.interface';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function TabsVerticalHeadTabSkeleton<C extends ElementType = 'span'>({
  as,
  ...rest
}: TabsVerticalHeadTabSkeletonProps<C>) {
  const Component = (as || 'span') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-tabs-vertical-head-tab-skeleton',
        styles.tab,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
