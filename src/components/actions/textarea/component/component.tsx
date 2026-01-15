import classNames from 'classnames';
import React, { ElementType } from 'react';
import { TextareaProps } from './component.interface';
import styles from './component.module.css';

export function Textarea<C extends ElementType = 'textarea'>({
  as,
  ...rest
}: TextareaProps<C>) {
  const Component = (as || 'textarea') as ElementType;

  return (
    <Component
      {...rest}
      ref={rest?.ref}
      id={rest.id}
      name={rest.name ?? rest.id}
      rows={rest?.rows ?? 3}
      className={classNames('mosuk-textarea', styles.textarea, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
