import { DrawerPortalProps } from '@/components/drawer/.partials/components/portal/component.interface';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DrawerPortal({ ...rest }: DrawerPortalProps) {
  return (
    <BaseUiDrawer.Portal
      {...rest}
      className={classNames(
        'mosuk-drawer-portal',
        '@container/drawer',
        'group/drawer',
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUiDrawer.Portal>
  );
}
