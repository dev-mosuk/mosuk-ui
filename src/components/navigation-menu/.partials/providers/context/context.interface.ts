import type { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';

export interface NavigationMenuContextProps {
  keepMounted?: boolean;
  container?: BaseUINavigationMenu.Portal.Props['container'];
}
