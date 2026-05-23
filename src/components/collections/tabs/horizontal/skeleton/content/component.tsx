import styles from '@/components/collections/tabs/horizontal/skeleton/component.module.css';
import { TabsHorizontalContentSkeletonProps } from '@/components/collections/tabs/horizontal/skeleton/content/component.interface';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function TabsHorizontalContentSkeleton<
  C extends ElementType = 'section',
>({ as, ...rest }: TabsHorizontalContentSkeletonProps<C>) {
  const Component = (as || 'section') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-tabs-horizontal-content-skeleton',
        styles.content,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
