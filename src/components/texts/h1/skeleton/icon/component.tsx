import classNames from 'classnames';
import React from 'react';
import { IconSkeleton } from '../../../../actions/icon/skeleton/component';
import styles from '../component.module.css';
import { H1IconSkeletonProps } from './component.interface';

export function H1IconSKeleton({ ...rest }: H1IconSkeletonProps) {
  return (
    <IconSkeleton
      {...rest}
      className={classNames(
        'mosuk-h1-icon-skeleton',
        styles.icon,
        rest?.className
      )}
    >
      {rest?.children}
    </IconSkeleton>
  );
}
