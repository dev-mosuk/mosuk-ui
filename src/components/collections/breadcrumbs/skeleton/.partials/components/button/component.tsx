import classNames from 'classnames';
import React from 'react';
import { ButtonSkeleton } from '../../../../../../actions/button/skeleton/component';
import styles from '../../styles/style.module.css';
import { BreadcrumbsButtonSkeletonProps } from './component.interface';

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
