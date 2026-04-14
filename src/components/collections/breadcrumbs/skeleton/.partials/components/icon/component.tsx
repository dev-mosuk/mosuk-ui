import classNames from 'classnames';
import React from 'react';
import { IconSkeleton } from '../../../../../../actions/icon/skeleton/component';
import styles from '../../styles/style.module.css';
import { BreadcrumbsIconSkeletonProps } from './component.interface';

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
