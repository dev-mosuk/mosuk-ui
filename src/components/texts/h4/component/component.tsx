import { H4Props } from '@/components/texts/h4/component/component.interface';
import styles from '@/components/texts/h4/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function H4<C extends ElementType = 'h4'>({ as, ...rest }: H4Props<C>) {
  const Component = (as || 'h4') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h4', styles.h4, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
