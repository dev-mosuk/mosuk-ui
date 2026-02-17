import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from './../component.module.css';
import { SelectOptionProps } from './component.props';

export function SelectOption<C extends ElementType = 'option'>({
  as,
  ...rest
}: SelectOptionProps<C>) {
  const Component = (as || 'option') as ElementType;

  return (
    <Component
      {...rest}
      ref={rest?.ref}
      className={classNames(
        'mosuk-select-option',
        styles.option,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
