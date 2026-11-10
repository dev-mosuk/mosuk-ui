import { FieldsetProps } from '@/components/forms/fieldset/component.interface';
import styles from '@/components/forms/fieldset/component.module.css';
import { FieldsetProvider } from '@/components/forms/fieldset/providers/provider';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function Fieldset<C extends ElementType = 'fieldset'>({
  as,
  ...rest
}: FieldsetProps<C>) {
  const Component = (as || 'fieldset') as ElementType;

  return (
    <FieldsetProvider>
      <Component
        {...rest}
        className={classNames(
          'mosuk-fieldset',
          styles.fieldset,
          rest?.className,
        )}
      >
        {rest?.children}
      </Component>
    </FieldsetProvider>
  );
}
