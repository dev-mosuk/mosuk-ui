import classNames from 'classnames';
import React, { ElementType, useId } from 'react';
import { TextareaProps } from './component.interface';
import styles from './component.module.css';

export function Textarea<C extends ElementType = 'textarea'>({
  as,
  ...rest
}: TextareaProps<C>) {
  const Component = (as || 'textarea') as ElementType;

  const id = rest?.id ?? useId();
  const name = rest?.name ?? id;

  return (
    <Component
      {...rest}
      ref={rest?.ref}
      id={id}
      name={name}
      className={classNames('mosuk-textarea', styles.textarea, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
