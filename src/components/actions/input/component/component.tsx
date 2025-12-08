import classNames from 'classnames';
import React, { ElementType } from 'react';
import { InputProps } from './component.interface';
import styles from './component.module.css';
import { InputContext } from './context/context';

export function Input<C extends ElementType = 'fieldset'>({
  as,
  ...rest
}: InputProps<C>) {
  const Component = (as || 'fieldset') as ElementType;

  return (
    <InputContext.Provider value={{}}>
      <Component
        {...rest}
        className={classNames('mosuk-input', styles.fieldset, rest?.className)}
      >
        {rest?.children}
      </Component>
    </InputContext.Provider>
  );
}
