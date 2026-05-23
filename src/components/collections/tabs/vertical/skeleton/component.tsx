import { TabsVerticalSkeletonProps } from '@/components/collections/tabs/vertical/skeleton/component.interface';
import styles from '@/components/collections/tabs/vertical/skeleton/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
