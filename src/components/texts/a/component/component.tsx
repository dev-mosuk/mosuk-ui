import { AProps } from '@/components/texts/a/component/component.interface';
import styles from '@/components/texts/a/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function A<C extends ElementType = 'a'>({ as, ...rest }: AProps<C>) {
  const Component = (as || 'a') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-a', styles.a, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
