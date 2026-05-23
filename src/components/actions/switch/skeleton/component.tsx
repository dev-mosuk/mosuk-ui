import { SwitchSkeletonProps } from '@/components/actions/switch/skeleton/component.interface';
import styles from '@/components/actions/switch/skeleton/component.module.css';
import { Skeleton } from '@/components/display/skeleton/component/component';
import classNames from 'classnames';
import React, { useId } from 'react';

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
