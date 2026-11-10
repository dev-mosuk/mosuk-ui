import { IconSkeleton } from '@/components/actions/icon/.partials/skeleton/component';
import { BreadcrumbsIconSkeletonProps } from '@/components/navigation/breadcrumbs/.partials/skeleton/components/icon/component.interface';
import styles from '@/components/navigation/breadcrumbs/.partials/skeleton/styles/style.module.css';
import classNames from 'classnames';
import React from 'react';

export function BreadcrumbsIconSkeleton({
  ...rest
}: BreadcrumbsIconSkeletonProps) {
  return (
    <IconSkeleton
      {...rest}
      as={rest?.as ?? 'span'}
      className={classNames(
        'mosuk-breadcrumbs-icon',
        styles.icon,
        rest?.className,
      )}
    >
      {rest?.children}
    </IconSkeleton>
  );
}
