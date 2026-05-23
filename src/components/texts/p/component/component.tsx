import { PProps } from '@/components/texts/p/component/component.interface';
import styles from '@/components/texts/p/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function P<C extends ElementType = 'p'>({ as, ...rest }: PProps<C>) {
  const Component = (as || 'p') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-p', styles.p, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
