import { FieldsetProps } from '@/components/fieldset/.partials/components/component.interface';
import { FieldsetProvider } from '@/components/fieldset/.partials/providers/provider';
import styles from '@/components/fieldset/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function Fieldset<C extends ElementType = 'fieldset'>({
  as,
  isDisabled,
  ...rest
}: FieldsetProps<C>) {
  const Component = (as || 'fieldset') as ElementType;

  return (
    <FieldsetProvider>
      <Component
        {...rest}
        disabled={isDisabled}
        className={classNames(
          'mosuk-fieldset',
          'group/fieldset',
          styles.fieldset,
          rest?.className,
        )}
      >
        {rest?.children}
      </Component>
    </FieldsetProvider>
  );
}
