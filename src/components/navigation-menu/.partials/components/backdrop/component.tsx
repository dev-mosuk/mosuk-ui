import { NavigationMenuBackdropProps } from '@/components/navigation-menu/.partials/components/backdrop/component.interface';
import styles from '@/components/navigation-menu/.partials/styles/component.module.css';
import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function NavigationMenuBackdrop<C = 'div'>({
  as,
  ref,
  className,
  children,
  ...rest
}: NavigationMenuBackdropProps<C>) {
  const Component = (as ?? 'div') as ElementType;

  return (
    <BaseUINavigationMenu.Backdrop
      {...rest}
      className={classNames(
        'mosuk-navigation-menu-backdrop',
        styles.backdrop,
        className,
      )}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUINavigationMenu.Backdrop>
  );
}
