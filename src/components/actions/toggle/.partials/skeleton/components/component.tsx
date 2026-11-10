import { ToggleSkeletonProps } from '@/components/actions/toggle/.partials/skeleton/components/component.props';
import styles from '@/components/actions/toggle/.partials/skeleton/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function ToggleSkeleton<C extends ElementType = 'div'>({
  as,
  orientation = 'horizontal',
  ...rest
}: ToggleSkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      data-orientation={orientation}
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
