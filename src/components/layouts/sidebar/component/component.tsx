import classNames from 'classnames';
import React, { ElementType } from 'react';
import { SidebarProps } from './component.interface';
import styles from './component.module.css';

export function Sidebar<C extends ElementType = 'aside'>({
  as,
  ...rest
}: SidebarProps<C>) {
  const Component = (as || 'aside') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-sidebar', styles.sidebar, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
