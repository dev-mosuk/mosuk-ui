import classNames from 'classnames';
import React, { ElementType, useContext } from 'react';
import styles from '../../component.module.css';
import { FieldsetContext } from '../../context/context';
import { FieldsetFieldLabelProps } from './component.interface';

export function FieldsetFieldLabel<C extends ElementType = 'label'>({
  as,
  ...rest
}: FieldsetFieldLabelProps<C>) {
  const Component = (as || 'label') as ElementType;

  const context = useContext(FieldsetContext);
  const htmlFor = rest?.htmlFor ?? context?.id;

  return (
    <Component
      {...rest}
      htmlFor={htmlFor}
      className={classNames('mosuk-fieldset-field-label', styles.label, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
