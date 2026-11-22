import { FileContext } from '@/components/file/.partials/components/component';
import { FileInputProps } from '@/components/file/.partials/components/input/component.interface';
import styles from '@/components/file/.partials/styles/component.module.css';
import React, { useContext, useId } from 'react';

export function FileInput({
  isDisabled,
  isReadOnly,
  isRequired,
  id,
  name,
  type,
  placeholder,
  className,
  ...props
}: FileInputProps) {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error(
      'FileInput должен использоваться только внутри компонента File',
    );
  }

  const resolvedId = id ?? useId();

  return (
    <input
      {...props}
      type={type ?? 'text'}
      id={resolvedId}
      name={name ?? resolvedId}
      placeholder={placeholder ?? 'Название файла'}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      className={(styles.input ?? '') + ' ' + (className ?? '')}
    />
  );
}
