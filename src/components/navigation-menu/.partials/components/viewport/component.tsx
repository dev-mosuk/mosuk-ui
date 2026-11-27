import { NavigationMenuViewportProps } from '@/components/navigation-menu/.partials/components/viewport/component.interface';
import styles from '@/components/navigation-menu/.partials/styles/component.module.css';
import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function NavigationMenuViewport<C = 'div'>({
  as,
  ref,
  className,
  children,
  ...rest
}: NavigationMenuViewportProps<C>) {
  const Component = (as ?? 'div') as ElementType;

  return (
    <BaseUINavigationMenu.Viewport
      {...rest}
      className={classNames(
        'mosuk-navigation-menu-viewport',
        styles.viewport,
        className,
      )}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUINavigationMenu.Viewport>
  );
}
