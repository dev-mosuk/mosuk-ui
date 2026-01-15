import classNames from 'classnames';
import React, { ElementType, useContext } from 'react';
import { Input } from '../../../../../actions/input/component/component';
import styles from '../../component.module.css';
import { FieldsetContext } from '../../context/context';
import { FieldsetFieldInputProps } from './component.interface';

export function FieldsetFieldInput<C extends ElementType = 'input'>({
  as,
  ...rest
}: FieldsetFieldInputProps<C>) {
  const Component = (as || Input) as ElementType;

  const context = useContext(FieldsetContext);

  return (
    <Component
      {...rest}
      id={context?.id}
      name={context?.name}
      className={classNames('mosuk-fieldset-field-input', styles.input, rest?.className)}
    />
  );
}
