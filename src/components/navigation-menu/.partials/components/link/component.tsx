import { NavigationMenuLinkProps } from '@/components/navigation-menu/.partials/components/link/component.interface';
import { NAVIGATION_MENU_LINK_DEFAULT_IS_ACTIVE } from '@/components/navigation-menu/.partials/constants/component.constants';
import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function NavigationMenuLink<C = 'a'>({
  as,
  ref,
  isActive = NAVIGATION_MENU_LINK_DEFAULT_IS_ACTIVE,
  className,
  children,
  ...rest
}: NavigationMenuLinkProps<C>) {
  const Component = (as ?? 'a') as ElementType;

  return (
    <BaseUINavigationMenu.Link
      {...rest}
      active={isActive}
      className={classNames('mosuk-navigation-menu-link', className)}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUINavigationMenu.Link>
  );
}
