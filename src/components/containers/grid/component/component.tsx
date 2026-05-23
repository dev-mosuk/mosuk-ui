import { GridProps } from '@/components/containers/grid/component/component.interface';
import styles from '@/components/containers/grid/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function Grid<C extends ElementType = 'div'>({
  as,
  ...rest
}: GridProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-grid', styles.grid, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
