import { NavigationMenuOverviewPopupProps } from '@/components/navigation-menu/.partials/components/overview-popup/component.interface';
import { NAVIGATION_MENU_DEFAULT_VARIANT } from '@/components/navigation-menu/.partials/constants/component.constants';
import styles from '@/components/navigation-menu/.partials/styles/component.module.css';
import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function NavigationMenuOverviewPopup<C = 'nav'>({
  as,
  ref,
  variant = NAVIGATION_MENU_DEFAULT_VARIANT,
  className,
  children,
  ...rest
}: NavigationMenuOverviewPopupProps<C>) {
  const Component = (as ?? 'nav') as ElementType;

  return (
    <BaseUINavigationMenu.Popup
      {...rest}
      data-variant={variant}
      className={classNames(
        'mosuk-navigation-menu-popup',
        styles.popup,
        className,
      )}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUINavigationMenu.Popup>
  );
}
