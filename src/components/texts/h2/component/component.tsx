import { H2Props } from '@/components/texts/h2/component/component.interface';
import styles from '@/components/texts/h2/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function H2<C extends ElementType = 'h2'>({ as, ...rest }: H2Props<C>) {
  const Component = (as || 'h2') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h2', styles.h2, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
