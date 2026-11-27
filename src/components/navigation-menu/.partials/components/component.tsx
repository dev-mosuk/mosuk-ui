import { NavigationMenuProps } from '@/components/navigation-menu/.partials/components/component.interface';
import { NavigationMenuProvider } from '@/components/navigation-menu/.partials/providers/provider';
import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import React from 'react';

export function NavigationMenu({
  keepMounted,
  container,
  children,
  ...rest
}: NavigationMenuProps) {
  return (
    <NavigationMenuProvider keepMounted={keepMounted} container={container}>
      <BaseUINavigationMenu.Root {...rest}>
        {children}
      </BaseUINavigationMenu.Root>
    </NavigationMenuProvider>
  );
}
