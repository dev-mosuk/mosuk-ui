import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';

type NavigationMenuOwnProps = {
  keepMounted?: boolean;
  container?: BaseUINavigationMenu.Portal.Props['container'];
};

export type NavigationMenuProps = NavigationMenuOwnProps &
  BaseUINavigationMenu.Root.Props;
