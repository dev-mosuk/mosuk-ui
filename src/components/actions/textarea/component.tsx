import { TextareaProps } from '@/components/actions/textarea/component.interface';
import styles from '@/components/actions/textarea/component.module.css';
import classNames from 'classnames';
import React, { ElementType, useId } from 'react';
import TextareaAutosizePrimitive from 'react-textarea-autosize';

export function Textarea<C extends ElementType = 'textarea'>({
  as,
  autoSize = false,
  minRows,
  maxRows,
  ...rest
}: TextareaProps<C>) {
  const Component = (
    autoSize ? TextareaAutosizePrimitive : as || 'textarea'
  ) as ElementType;

  const id = rest?.id ?? useId();
  const name = rest?.name ?? id;

  return (
    <Component
      {...rest}
      {...(autoSize ? { minRows, maxRows } : {})}
      ref={rest?.ref}
      id={id}
      name={name}
      className={classNames(
        'mosuk-textarea',
        styles.textarea,
        {
          [styles.autosize]: autoSize,
        },
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
