import React, { useContext, useId } from 'react';
import { InputContext } from '../component';
import styles from '../component.module.css';
import { InputInputProps } from './component.interface';

export function InputInput({ ref, icon: Icon, label, children, ...props }: InputInputProps) {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error('Input.Input must be used within an Input component.');
  } 

  if (!props?.id) {
    props.id = useId();
  }

  return (
    <div className={'mosuk-input-input' + ' ' + (styles.input ?? '')}>
      <input
        {...props}
        ref={ref}
        id={props.id}
        name={props.name ?? props.id}
        placeholder={props.placeholder ?? label}
        className={props.className ?? ''}
      />

      {label && (
        <label htmlFor={props?.id} className={styles.label}>
          {label}
        </label>
      )}

      {Icon && (
        <label htmlFor={props?.id} className={styles.icon} aria-hidden="true">
          <Icon />
        </label>
      )}

      {children}
    </div>
  );
}
