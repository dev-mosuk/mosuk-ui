import { Checkbox as BaseCheckbox } from '@base-ui/react';
import classNames from 'classnames';
import React, { useId } from 'react';
import styles from '../styles/component.module.css';
import { CheckboxProps } from './component.interface';

export function Checkbox({ ref, ...rest }: CheckboxProps) {
  if (!rest?.id) {
    rest.id = useId();
  }

  return (
    <BaseCheckbox.Root
      {...rest}
      ref={ref}
      id={rest.id}
      name={rest.name ?? rest.id}
      className={classNames('mosuk-checkbox', styles.checkbox, rest?.className)}
    >
      {rest?.children}
    </BaseCheckbox.Root>
  );
}
