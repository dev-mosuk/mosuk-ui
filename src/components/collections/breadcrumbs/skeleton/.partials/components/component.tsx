import { BreadcrumbsButtonSkeleton } from '@/components/collections/breadcrumbs/skeleton/.partials/components/button/component';
import { BreadcrumbsSkeletonProps } from '@/components/collections/breadcrumbs/skeleton/.partials/components/component.interface';
import { BreadcrumbsIconSkeleton } from '@/components/collections/breadcrumbs/skeleton/.partials/components/icon/component';
import styles from '@/components/collections/breadcrumbs/skeleton/.partials/styles/style.module.css';
import classNames from 'classnames';
import React, { Children, ElementType, isValidElement } from 'react';

export function BreadcrumbsSkeleton<C extends ElementType = 'div'>({
  as,
  ...rest
}: BreadcrumbsSkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-breadcrumbs-skeleton',
        styles.breadcrumbs,
        rest?.className,
      )}
    >
      {Children.map(rest?.children, (child, index) => {
        if (
          isValidElement(child) &&
          (child.type === BreadcrumbsIconSkeleton ||
            child.type === BreadcrumbsButtonSkeleton)
        ) {
          return (
            <div key={index} className={styles.slide}>
              {child}
            </div>
          );
        }

        return child;
      })}
    </Component>
  );
}
