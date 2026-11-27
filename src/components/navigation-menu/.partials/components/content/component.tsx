import { NavigationMenuContentProps } from '@/components/navigation-menu/.partials/components/content/component.interface';
import styles from '@/components/navigation-menu/.partials/styles/component.module.css';
import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function NavigationMenuContent<C = 'div'>({
  as,
  ref,
  className,
  children,
  ...rest
}: NavigationMenuContentProps<C>) {
  const Component = (as ?? 'div') as ElementType;

  return (
    <BaseUINavigationMenu.Content
      {...rest}
      className={classNames(
        'mosuk-navigation-menu-content',
        styles.content,
        className,
      )}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUINavigationMenu.Content>
  );
}
