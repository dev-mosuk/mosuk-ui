import { HeaderProps } from '@/components/layouts/header/component/.partials/components/component.interface';
import styles from '@/components/layouts/header/component/.partials/styles/style.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function Header<C extends ElementType = 'header'>({
  ...rest
}: HeaderProps<C>) {
  const Component = (rest?.as || 'header') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-header', styles.header, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
