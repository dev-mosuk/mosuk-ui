import { ButtonSkeleton } from '@/components/actions/button/.partials/skeleton/component';
import { ToggleButtonSkeletonProps } from '@/components/actions/toggle/.partials/skeleton/components/button/component.props';
import styles from '@/components/actions/toggle/.partials/skeleton/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function ToggleButtonSkeleton<C extends ElementType = 'div'>({
  as,
  ...rest
}: ToggleButtonSkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <ButtonSkeleton
      {...rest}
      as={Component}
      className={classNames(
        'mosuk-toggle-button',
        styles.button,
        rest?.className,
      )}
    >
      {rest?.children}
    </ButtonSkeleton>
  );
}
