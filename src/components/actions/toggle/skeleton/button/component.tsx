import classNames from 'classnames';
import React, { ElementType } from 'react';
import { ButtonSkeleton } from '../../../button/skeleton/component';
import styles from '../component.module.css';
import { ToggleButtonSkeletonProps } from './component.props';

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
