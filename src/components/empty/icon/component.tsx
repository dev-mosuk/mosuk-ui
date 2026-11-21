import styles from '@/components/display/empty/component.module.css';
import { EmptyIconProps } from '@/components/display/empty/icon/component.interface';
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
