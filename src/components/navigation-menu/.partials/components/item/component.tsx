import { NavigationMenuItemProps } from '@/components/navigation-menu/.partials/components/item/component.interface';
import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function NavigationMenuItem<C = 'li'>({
  as,
  ref,
  className,
  children,
  ...rest
}: NavigationMenuItemProps<C>) {
  const Component = (as ?? 'li') as ElementType;

  return (
    <BaseUINavigationMenu.Item
      {...rest}
      className={classNames('mosuk-navigation-menu-item', className)}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUINavigationMenu.Item>
  );
}
