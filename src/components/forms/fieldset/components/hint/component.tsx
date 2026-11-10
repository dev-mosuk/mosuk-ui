import styles from '@/components/forms/fieldset/component.module.css';
import { FieldsetHintType } from '@/components/forms/fieldset/components/hint/component.enums';
import { FieldsetHintProps } from '@/components/forms/fieldset/components/hint/component.interface';
import { Hint } from '@/components/texts/hint';
import classNames from 'classnames';
import React from 'react';

export function FieldsetHint({
  as,
  type,
  children,
  className,
  ...rest
}: FieldsetHintProps) {
  const hintType = type ?? FieldsetHintType.INFO;

  return (
    <Hint
      {...rest}
      as={as}
      type={hintType}
      className={classNames(
        'mosuk-fieldset-hint',
        styles.hint,
        styles[hintType],
        className,
      )}
    >
      <Hint.Icon />
      <Hint.Text>{children}</Hint.Text>
    </Hint>
  );
}
