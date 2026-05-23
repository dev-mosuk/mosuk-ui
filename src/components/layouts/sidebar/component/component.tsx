import { SidebarProps } from '@/components/layouts/sidebar/component/component.interface';
import styles from '@/components/layouts/sidebar/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
