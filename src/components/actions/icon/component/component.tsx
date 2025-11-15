import classNames from 'classnames';
import React, { ElementType } from 'react';
import { IconProps } from './component.interface';
import styles from './component.module.css';

export function Icon<C extends ElementType = 'button'>({ as, ...rest }: IconProps<C>) {
  const Component = (as || 'button') as ElementType;

  return (
    <Component {...rest} className={classNames('mosuk-icon', styles.icon, rest?.className)}>
      {rest?.children}
    </Component>
  );
}
