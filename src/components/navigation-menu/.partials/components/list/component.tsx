import { NavigationMenuListProps } from '@/components/navigation-menu/.partials/components/list/component.interface';
import styles from '@/components/navigation-menu/.partials/styles/component.module.css';
import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function NavigationMenuList<C = 'ul'>({
  as,
  ref,
  className,
  children,
  ...rest
}: NavigationMenuListProps<C>) {
  const Component = (as ?? 'ul') as ElementType;

  return (
    <BaseUINavigationMenu.List
      {...rest}
      className={classNames(
        'mosuk-navigation-menu-list',
        styles.list,
        className,
      )}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUINavigationMenu.List>
  );
}
