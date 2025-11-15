import classNames from 'classnames';
import React, { ElementType } from 'react';
import { H2SkeletonProps } from './component.interface';
import styles from './component.module.css';

export function H2Skeleton<C extends ElementType = 'div'>({ as, ...rest }: H2SkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h2-skeleton', styles.h2, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
