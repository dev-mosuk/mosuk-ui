import { HintTextProps } from '@/components/texts/hint/component/.partials/components/text/component.interface';
import styles from '@/components/texts/hint/component/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function HintText<C extends ElementType = 'span'>({
  as,
  ...rest
}: HintTextProps<C>) {
  const Component = (as || 'span') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-hint-text', styles.text, rest.className)}
    />
  );
}
