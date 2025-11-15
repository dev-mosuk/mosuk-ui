import React, { useContext, useId } from 'react';
import { IMaskInput } from 'react-imask';
import styles from '../../../../input/component/component.module.css';
import { InputContext } from '../../../component/component';
import { InputMaskInputProps } from './component.interface';

export function InputMaskInput({
  ref,
  icon: Icon,
  label,
  children,
  ...props
}: InputMaskInputProps) {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error('Input.Mask must be used within an Input component.');
  }

  if (!props?.id) {
    props.id = useId();
  }

  return (
    <div className={`mosuk-input-mask-input ${styles.input}`}>
      <IMaskInput
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
