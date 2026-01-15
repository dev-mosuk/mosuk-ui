import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../component.module.css';
import { FieldsetFieldProps } from './component.interface';

export function FieldsetField<C extends ElementType = 'div'>({
  as,
  ...rest
}: FieldsetFieldProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-fieldset-field', styles.field, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
