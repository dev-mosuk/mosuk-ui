import classNames from 'classnames';
import React from 'react';
import { IconSkeleton } from '../../../../actions/icon/skeleton/component';
import styles from '../component.module.css';
import { H5IconSkeletonProps } from './component.interface';

export function H5IconSKeleton({ ...rest }: H5IconSkeletonProps) {
  return (
    <IconSkeleton
      {...rest}
      className={classNames(
        'mosuk-h5-icon-skeleton',
        styles.icon,
        rest?.className
      )}
    >
      {rest?.children}
    </IconSkeleton>
  );
}
