import styles from '@/components/fieldset/component.module.css';
import { FieldsetFieldLabelProps } from '@/components/fieldset/components/field/label/component.interface';
import { useFieldset } from '@/components/fieldset/hooks/hook';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
