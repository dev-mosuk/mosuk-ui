import { ButtonSkeleton } from '@/components/actions/button/skeleton/component';
import { BreadcrumbsButtonSkeletonProps } from '@/components/navigation/breadcrumbs/skeleton/.partials/components/button/component.interface';
import styles from '@/components/navigation/breadcrumbs/skeleton/.partials/styles/style.module.css';
import classNames from 'classnames';
import React from 'react';

export function BreadcrumbsButtonSkeleton({
  ...rest
}: BreadcrumbsButtonSkeletonProps) {
  return (
    <ButtonSkeleton
      {...rest}
      as={rest?.as ?? 'span'}
      className={classNames(
        'mosuk-breadcrumbs-button-skeleton',
        styles.button,
        rest?.className,
      )}
    >
      {rest?.children}
    </ButtonSkeleton>
  );
}
