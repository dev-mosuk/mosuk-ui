import styles from '@/components/forms/fieldset/component/component.module.css';
import { FieldsetFieldProps } from '@/components/forms/fieldset/component/components/field/component.interface';
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
