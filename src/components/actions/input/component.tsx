import { InputProps } from '@/components/actions/input/component.interface';
import styles from '@/components/actions/input/component.module.css';
import classNames from 'classnames';
import React, { ElementType, useId } from 'react';

export function Input<C extends ElementType = 'input'>({
  as,
  ...rest
}: InputProps<C>) {
  const Component = (as || 'input') as ElementType;

  const id = rest?.id ?? useId();
  const name = rest?.name ?? id;

  return (
    <Component
      {...rest}
      ref={rest?.ref}
      id={id}
      name={name}
      className={classNames('mosuk-input', styles.input, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
