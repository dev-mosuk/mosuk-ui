import { NavigationMenuIconProps } from '@/components/navigation-menu/.partials/components/icon/component.interface';
import styles from '@/components/navigation-menu/.partials/styles/component.module.css';
import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function NavigationMenuIcon<C = 'span'>({
  as,
  ref,
  className,
  children,
  ...rest
}: NavigationMenuIconProps<C>) {
  const Component = (as ?? 'span') as ElementType;

  return (
    <BaseUINavigationMenu.Icon
      {...rest}
      className={classNames(
        'mosuk-navigation-menu-icon',
        styles.icon,
        className,
      )}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUINavigationMenu.Icon>
  );
}
