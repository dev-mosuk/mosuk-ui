import { EmptyIconProps } from '@/components/empty/.partials/components/icon/component.interface';
import styles from '@/components/empty/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function EmptyIcon<C extends ElementType = 'div'>({
  as,
  ...rest
}: EmptyIconProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-empty-icon', styles.icon, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
