import classNames from 'classnames';
import React, { ElementType, useId } from 'react';
import styles from './component.module.css';
import { SelectProps } from './component.props';

export function Select<C extends ElementType = 'select'>({
  as,
  ...rest
}: SelectProps<C>) {
  const Component = (as || 'select') as ElementType;

  const id = rest?.id ?? useId();
  const name = rest?.name ?? id;

  return (
    <Component
      {...rest}
      ref={rest?.ref}
      id={id}
      name={name}
      className={classNames('mosuk-select', styles.select, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
