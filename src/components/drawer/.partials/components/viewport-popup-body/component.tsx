import { DrawerViewportPopupBodyProps } from '@/components/drawer/.partials/components/viewport-popup-body/component.interface';
import styles from '@/components/drawer/.partials/styles/component.module.css';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function DrawerViewportPopupBody<C extends ElementType = 'div'>({
  as,
  ref,
  className,
  children,
  ...rest
}: DrawerViewportPopupBodyProps<C>) {
  const Component = (as ?? 'div') as ElementType;

  return (
    <BaseUiDrawer.Content
      {...rest}
      className={classNames(
        'mosuk-drawer-viewport-popup-body',
        styles.body,
        className,
      )}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUiDrawer.Content>
  );
}
