import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from '../styles/style.module.css';
import { TabbarProps } from './component.interface';

export function Tabbar<C extends ElementType = 'aside'>({
  tabbar,
  ...rest
}: TabbarProps<C>) {
  const Component = (rest?.as || 'aside') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-tabbar-skeleotn',
        styles.tabbar,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
