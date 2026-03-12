import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from './component.module.css';
import { ObserverProps } from './component.props';

export function Observer<C extends ElementType = 'aside'>({
  as,
  ...rest
}: ObserverProps<C>) {
  const Component = (as || 'aside') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-observer', styles.observer, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
