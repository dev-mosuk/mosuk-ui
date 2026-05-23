import { SwitchProps } from '@/components/actions/switch/component/component.interface';
import styles from '@/components/actions/switch/component/component.module.css';
import classNames from 'classnames';
import React, { useId } from 'react';

export function Switch({ ref, ...rest }: SwitchProps) {
  if (!rest?.id) {
    rest.id = useId();
  }

  return (
    <input
      {...rest}
      ref={ref}
      id={rest.id}
      type='checkbox'
      name={rest.name ?? rest.id}
      className={classNames('mosuk-switch', styles.switch, rest?.className)}
    />
  );
}
