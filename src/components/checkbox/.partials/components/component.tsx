import { CheckboxProps } from '@/components/checkbox/.partials/components/component.interface';
import styles from '@/components/checkbox/.partials/styles/component.module.css';
import { Checkbox as BaseCheckbox } from '@base-ui/react';
import classNames from 'classnames';
import React, { useId } from 'react';

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
      className={classNames(
        'mosuk-checkbox',
        '@container/checkbox',
        'group/checkbox',
        styles.checkbox,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseCheckbox.Root>
  );
}
