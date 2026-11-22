import { FieldsetFieldProps } from '@/components/fieldset/.partials/components/field/component.interface';
import styles from '@/components/fieldset/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function FieldsetField<C extends ElementType = 'div'>({
  as,
  ...rest
}: FieldsetFieldProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-fieldset-field',
        styles.field,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
