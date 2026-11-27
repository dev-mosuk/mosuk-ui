import { NavigationMenuArrowProps } from '@/components/navigation-menu/.partials/components/arrow/component.interface';
import styles from '@/components/navigation-menu/.partials/styles/component.module.css';
import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function NavigationMenuArrow<C = 'div'>({
  as,
  ref,
  className,
  children,
  ...rest
}: NavigationMenuArrowProps<C>) {
  const Component = (as ?? 'div') as ElementType;

  return (
    <BaseUINavigationMenu.Arrow
      {...rest}
      className={classNames(
        'mosuk-navigation-menu-arrow',
        styles.arrow,
        className,
      )}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUINavigationMenu.Arrow>
  );
}
