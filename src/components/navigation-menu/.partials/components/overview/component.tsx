import { NavigationMenuOverviewProps } from '@/components/navigation-menu/.partials/components/overview/component.interface';
import {
  NAVIGATION_MENU_OVERVIEW_DEFAULT_ALIGN,
  NAVIGATION_MENU_OVERVIEW_DEFAULT_SIDE_OFFSET,
} from '@/components/navigation-menu/.partials/constants/component.constants';
import { useNavigationMenu } from '@/components/navigation-menu/.partials/hooks/hook';
import styles from '@/components/navigation-menu/.partials/styles/component.module.css';
import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function NavigationMenuOverview<C = 'div'>({
  as,
  ref,
  className,
  children,
  align,
  sideOffset,
  ...rest
}: NavigationMenuOverviewProps<C>) {
  const { keepMounted, container } = useNavigationMenu();
  const Component = (as ?? 'div') as ElementType;

  return (
    <BaseUINavigationMenu.Portal
      keepMounted={keepMounted}
      container={container}
      className={classNames(
        'mosuk-navigation-menu',
        'group/navigation-menu',
        styles.portal,
      )}
    >
      <BaseUINavigationMenu.Positioner
        {...rest}
        align={align ?? NAVIGATION_MENU_OVERVIEW_DEFAULT_ALIGN}
        sideOffset={sideOffset ?? NAVIGATION_MENU_OVERVIEW_DEFAULT_SIDE_OFFSET}
        className={classNames(
          'mosuk-navigation-menu-overview',
          styles.overview,
          className,
        )}
        render={<Component ref={ref} />}
      >
        {children}
      </BaseUINavigationMenu.Positioner>
    </BaseUINavigationMenu.Portal>
  );
}
