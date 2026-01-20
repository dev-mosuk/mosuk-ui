import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../../../component.module.css';
import { useFieldset } from '../../../hooks/hook';
import { FieldsetFieldLabelProps } from './component.interface';

export function FieldsetFieldLabel<C extends ElementType = 'label'>({
  as,
  ...rest
}: FieldsetFieldLabelProps<C>) {
  const Component = (as || 'label') as ElementType;

  const { id } = useFieldset();

  const uniqueId = rest?.htmlFor ?? id;

  return (
    <Component
      {...rest}
      htmlFor={uniqueId}
      className={classNames(
        'mosuk-fieldset-field-label',
        styles.label,
        rest?.className
      )}
    >
      {rest?.children}
    </Component>
  );
}
