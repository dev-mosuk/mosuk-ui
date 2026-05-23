import { TabbarProps } from '@/components/layouts/tabbar/component/.partials/components/component.interface';
import styles from '@/components/layouts/tabbar/component/.partials/styles/style.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
