import styles from '@/components/actions/select/component/component.module.css';
import { SelectProps } from '@/components/actions/select/component/component.props';
import classNames from 'classnames';
import React, { ElementType, useId } from 'react';

export function Select<C extends ElementType = 'input'>({
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
