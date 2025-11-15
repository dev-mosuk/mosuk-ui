import classNames from 'classnames';
import React, { ElementType } from 'react';
import { H4SkeletonProps } from './component.interface';
import styles from './component.module.css';

export function H4Skeleton<C extends ElementType = 'div'>({ as, ...rest }: H4SkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h4-skeleton', styles.h4, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
