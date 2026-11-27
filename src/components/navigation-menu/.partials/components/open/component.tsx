import { NavigationMenuOpenProps } from '@/components/navigation-menu/.partials/components/open/component.interface';
import { NAVIGATION_MENU_OPEN_DEFAULT_IS_DISABLED } from '@/components/navigation-menu/.partials/constants/component.constants';
import styles from '@/components/navigation-menu/.partials/styles/component.module.css';
import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function NavigationMenuOpen<C = 'button'>({
  as,
  ref,
  isDisabled = NAVIGATION_MENU_OPEN_DEFAULT_IS_DISABLED,
  className,
  children,
  ...rest
}: NavigationMenuOpenProps<C>) {
  const Component = (as ?? 'button') as ElementType;
  const nativeButton = as == null || as === 'button' || typeof as !== 'string';

  return (
    <BaseUINavigationMenu.Trigger
      {...rest}
      disabled={isDisabled}
      nativeButton={nativeButton}
      className={classNames(
        'mosuk-navigation-menu-open',
        styles.open,
        className,
      )}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUINavigationMenu.Trigger>
  );
}
