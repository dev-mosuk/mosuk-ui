import { IconProps } from '@/components/actions/icon/component.interface';
import styles from '@/components/actions/icon/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function Icon<C extends ElementType = 'button'>({
  as,
  ...rest
}: IconProps<C>) {
  const Component = (as || 'button') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-icon', styles.icon, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
