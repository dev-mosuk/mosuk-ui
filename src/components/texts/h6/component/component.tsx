import { H6Props } from '@/components/texts/h6/component/component.interface';
import styles from '@/components/texts/h6/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function H6<C extends ElementType = 'h6'>({ as, ...rest }: H6Props<C>) {
  const Component = (as || 'h6') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h6', styles.h6, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
