import classNames from 'classnames';
import React, { useId } from 'react';
import { Skeleton } from '../../../display/skeleton/component/component';
import { SwitchSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function SwitchSkeleton({ ...rest }: SwitchSkeletonProps) {
  if (!rest?.id) {
    rest.id = useId();
  }

  return (
    <Skeleton
      {...rest}
      className={classNames('mosuk-switch', styles.switch, rest?.className)}
    />
  );
}
