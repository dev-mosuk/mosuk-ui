import { H3Props } from '@/components/texts/h3/component/component.interface';
import styles from '@/components/texts/h3/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function H3<C extends ElementType = 'h3'>({ as, ...rest }: H3Props<C>) {
  const Component = (as || 'h3') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h3', styles.h3, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
