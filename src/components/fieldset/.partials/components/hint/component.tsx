import { FieldsetHintType } from '@/components/fieldset/.partials/components/hint/component.enums';
import { FieldsetHintProps } from '@/components/fieldset/.partials/components/hint/component.interface';
import styles from '@/components/fieldset/.partials/styles/component.module.css';
import { Hint } from '@/components/hint';
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
