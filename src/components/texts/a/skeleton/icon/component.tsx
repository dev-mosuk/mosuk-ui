import classNames from 'classnames';
import React from 'react';
import { IconSkeleton } from '../../../../actions/icon/skeleton/component';
import component from '../../component/component.module.css';
import skeleton from '../component.module.css';
import { AIconSkeletonProps } from './component.interface';

export function AIconSKeleton({ ...rest }: AIconSkeletonProps) {
  return (
    <IconSkeleton
      {...rest}
      className={classNames(
        'mosuk-a-icon-skeleton',
        component.icon,
        skeleton.icon,
        rest?.className
      )}
    >
      {rest?.children}
    </IconSkeleton>
  );
}
