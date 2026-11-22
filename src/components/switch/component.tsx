import { SwitchProps } from '@/components/switch/component.interface';
import styles from '@/components/switch/component.module.css';
import classNames from 'classnames';
import React, { useId } from 'react';

export function Switch({
  ref,
  isSelected,
  defaultSelected,
  isDisabled,
  isReadOnly,
  isRequired,
  id,
  name,
  className,
  ...rest
}: SwitchProps) {
  const resolvedId = id ?? useId();

  return (
    <input
      {...rest}
      ref={ref}
      id={resolvedId}
      type='checkbox'
      name={name ?? resolvedId}
      checked={isSelected}
      defaultChecked={defaultSelected}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      className={classNames(
        'mosuk-switch',
        '@container/switch',
        'group/switch',
        styles.switch,
        className,
      )}
    />
  );
}
