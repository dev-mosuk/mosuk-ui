import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from './component.module.css';
import { ToggleSkeletonProps } from './component.props';

export function ToggleSkeleton<C extends ElementType = 'div'>({
  as,
  ...rest
}: ToggleSkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-toggle-skeleton',
        styles.toggle,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
