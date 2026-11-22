import { DrawerViewportProps } from '@/components/drawer/.partials/components/viewport/component.interface';
import { useDrawer } from '@/components/drawer/.partials/hooks/hook';
import styles from '@/components/drawer/.partials/styles/component.module.css';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DrawerViewport({ ...rest }: DrawerViewportProps) {
  const { keepMounted, container } = useDrawer();

  return (
    <BaseUiDrawer.Portal
      keepMounted={keepMounted}
      container={container}
      className={classNames(
        'mosuk-drawer',
        '@container/drawer',
        'group/drawer',
      )}
    >
      <BaseUiDrawer.Viewport
        {...rest}
        className={classNames(
          'mosuk-drawer-viewport',
          styles.viewport,
          rest?.className,
        )}
      >
        {rest?.children}
      </BaseUiDrawer.Viewport>
    </BaseUiDrawer.Portal>
  );
}
