import { ButtonProps } from '@/components/actions/button/component/component.interface';
import styles from '@/components/actions/button/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function Button<C extends ElementType = 'button'>({
  as,
  ...rest
}: ButtonProps<C>) {
  const Component = (as || 'button') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-button', styles.button, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
