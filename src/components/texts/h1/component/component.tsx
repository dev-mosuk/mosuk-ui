import { H1Props } from '@/components/texts/h1/component/component.interface';
import styles from '@/components/texts/h1/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function H1<C extends ElementType = 'h1'>({ as, ...rest }: H1Props<C>) {
  const Component = (as || 'h1') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h1', styles.h1, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
