import { DataProps } from '@/components/texts/data/component/component.interface';
import styles from '@/components/texts/data/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function Data<C extends ElementType = 'data'>({
  as,
  ...rest
}: DataProps<C>) {
  const Component = (as || 'data') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-data', styles.data, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
