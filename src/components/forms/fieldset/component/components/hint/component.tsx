import styles from '@/components/forms/fieldset/component/component.module.css';
import { FieldsetHintType } from '@/components/forms/fieldset/component/components/hint/component.enums';
import { FieldsetHintProps } from '@/components/forms/fieldset/component/components/hint/component.interface';
import { Hint } from '@/components/texts/hint/component/component';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function FieldsetHint<C extends ElementType = 'p'>({
  as,
  type,
  ...rest
}: FieldsetHintProps<C>) {
  const Component = Hint as ElementType;
  const hintType = type ?? FieldsetHintType.INFO;

  return (
    <Component
      {...rest}
      type={hintType}
      className={classNames(
        'mosuk-fieldset-hint',
        styles.hint,
        styles[hintType],
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
