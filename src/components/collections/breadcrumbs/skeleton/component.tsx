import classNames from 'classnames';
import React, { Children, ElementType, isValidElement } from 'react';
import { BreadcrumbsButtonSkeleton } from './button/component';
import { BreadcrumbsSkeletonProps } from './component.interface';
import styles from './component.module.css';
import { BreadcrumbsIconSkeleton } from './icon/component';

export function BreadcrumbsSkeleton<C extends ElementType = 'div'>({
  as,
  ...rest
}: BreadcrumbsSkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-breadcrumbs-skeleton', styles.breadcrumbs, rest?.className)}
    >
      {Children.map(rest?.children, (child, index) => {
        if (
          isValidElement(child) &&
          (child.type === BreadcrumbsIconSkeleton || child.type === BreadcrumbsButtonSkeleton)
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
