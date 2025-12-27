import classNames from 'classnames';
import React, { useContext, useId } from 'react';
import styles from '../component.module.css';
import { InputContext } from '../context/context';
import { InputInputProps } from './component.interface';

export function InputInput({
  ref,
  icon: Icon,
  label,
  children,
  ...rest
}: InputInputProps) {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error('Input.Input must be used within an Input component.');
  }

  if (!rest?.id) {
    rest.id = useId();
  }

  return (
    <div
      className={classNames('mosuk-input-input', styles.input, rest?.className)}
    >
      <input
        {...rest}
        ref={ref}
        id={rest.id}
        name={rest.name ?? rest.id}
        placeholder={rest.placeholder ?? label}
      />

      {label && (
        <label htmlFor={rest?.id} className={classNames(styles.label)}>
          {label}
        </label>
      )}

      {Icon && (
        <label
          htmlFor={rest?.id}
          className={classNames(styles.icon)}
          aria-hidden="true"
        >
          <Icon />
        </label>
      )}

      {children}
    </div>
  );
}
