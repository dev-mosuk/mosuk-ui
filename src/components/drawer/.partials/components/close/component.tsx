import { DrawerCloseProps } from '@/components/drawer/.partials/components/close/component.interface';
import { Drawer as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function DrawerClose<C = 'button'>({
  as,
  ref,
  isDisabled,
  className,
  children,
  ...rest
}: DrawerCloseProps<C>) {
  const Component = (as ?? 'button') as ElementType;
  // string tags: only `button` is native; components (e.g. Button) default to native
  const nativeButton = as == null || as === 'button' || typeof as !== 'string';

  return (
    <BaseUiDrawer.Close
      {...rest}
      disabled={isDisabled}
      nativeButton={nativeButton}
      className={classNames('mosuk-drawer-close', className)}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUiDrawer.Close>
  );
}
