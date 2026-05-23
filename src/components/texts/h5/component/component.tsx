import { H5Props } from '@/components/texts/h5/component/component.interface';
import styles from '@/components/texts/h5/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function H5<C extends ElementType = 'h5'>({ as, ...rest }: H5Props<C>) {
  const Component = (as || 'h5') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-h5', styles.h5, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
