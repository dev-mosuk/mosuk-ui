import classNames from 'classnames';
import React, {
  ElementType
} from 'react';
import { FieldsetProps } from './component.interface';
import styles from './component.module.css';
import { FieldsetProvider } from './providers/provider';

export function Fieldset<C extends ElementType = 'fieldset'>({
  as,
  ...rest
}: FieldsetProps<C>) {
  const Component = (as || 'fieldset') as ElementType;

  return (
    <FieldsetProvider>
      <Component
        {...rest}
        className={classNames('mosuk-fieldset', styles.fieldset, rest?.className)}
      >
        {rest?.children}
      </Component>
    </FieldsetProvider>
  );
}
