import classNames from 'classnames';
import React, { ElementType } from 'react';
import { SkeletonProps } from './component.interface';
import styles from './component.module.css';

export function Skeleton<C extends ElementType = 'div'>({ as, ...rest }: SkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component {...rest} className={classNames('mosuk-skeleton', styles.skeleton, rest?.className)}>
      {rest?.children}
    </Component>
  );
}
