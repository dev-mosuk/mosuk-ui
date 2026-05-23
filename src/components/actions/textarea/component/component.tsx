import { TextareaProps } from '@/components/actions/textarea/component/component.interface';
import styles from '@/components/actions/textarea/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType, useId } from 'react';

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
