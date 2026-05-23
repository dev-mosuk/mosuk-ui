import styles from '@/components/collections/tabs/vertical/skeleton/component.module.css';
import { TabsVerticalHeadSkeletonProps } from '@/components/collections/tabs/vertical/skeleton/head/component.interface';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
