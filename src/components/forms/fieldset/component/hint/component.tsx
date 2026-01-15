import classNames from 'classnames';
import React, { ElementType } from 'react';
import { Hint } from '../../../../texts/hint/component/component';
import styles from '../component.module.css';
import { FieldsetHintType } from './component.enums';
import { FieldsetHintProps } from './component.interface';

export function FieldsetHint<C extends ElementType = 'p'>({
  as,
  type,
  ...rest
}: FieldsetHintProps<C>) {
  const Component = (as || Hint) as ElementType;

  const hintType = type ?? FieldsetHintType.INFO;

  return (
    <Component
      {...rest}
      type={hintType}
      className={classNames('mosuk-fieldset-hint', styles.hint, styles[hintType], rest?.className)}
    >
      {rest?.children} 
    </Component>
  );
}
