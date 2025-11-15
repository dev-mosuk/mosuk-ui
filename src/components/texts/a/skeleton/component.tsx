import classNames from 'classnames';
import React, { ElementType } from 'react';
import component from '../component/component.module.css';
import { ASkeletonProps } from './component.interface';
import skeleton from './component.module.css';

export function ASkeleton<C extends ElementType = 'div'>({ as, ...rest }: ASkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-a-skeleton', component.a, skeleton.a, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
