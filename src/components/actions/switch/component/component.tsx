import classNames from 'classnames';
import React, { useId } from 'react';
import { SwitchProps } from './component.interface';
import styles from './component.module.css';

export function Switch({ ref, ...rest }: SwitchProps) {
  if (!rest?.id) {
    rest.id = useId();
  }

  return (
    <input
      {...rest}
      ref={ref}
      id={rest.id}
      type="checkbox"
      name={rest.name ?? rest.id}
      className={classNames('mosuk-switch', styles.switch, rest?.className)}
    />
  );
}
