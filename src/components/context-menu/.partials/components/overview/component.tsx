'use client';

import { ContextMenuOverviewProps } from '@/components/context-menu/.partials/components/overview/component.interface';
import { CONTEXT_MENU_OVERVIEW_DEFAULT_SIDE_OFFSET } from '@/components/context-menu/.partials/constants/component.constants';
import { useContextMenu } from '@/components/context-menu/.partials/hooks/hook';
import styles from '@/components/context-menu/.partials/styles/component.module.css';
import { ContextMenu as BaseUIContextMenu } from '@base-ui/react/context-menu';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function ContextMenuOverview<C extends ElementType = 'div'>({
  as,
  ref,
  className,
  children,
  sideOffset,
  ...rest
}: ContextMenuOverviewProps<C>) {
  const { keepMounted, container } = useContextMenu();
  const Component = (as ?? 'div') as ElementType;

  return (
    <BaseUIContextMenu.Portal
      keepMounted={keepMounted}
      container={container}
      className={classNames(
        'mosuk-context-menu',
        '@container/context-menu',
        'group/context-menu',
      )}
    >
      <BaseUIContextMenu.Positioner
        {...rest}
        sideOffset={sideOffset ?? CONTEXT_MENU_OVERVIEW_DEFAULT_SIDE_OFFSET}
        className={classNames(
          'mosuk-context-menu-overview',
          styles.overview,
          className,
        )}
        render={<Component ref={ref} />}
      >
        {children}
      </BaseUIContextMenu.Positioner>
    </BaseUIContextMenu.Portal>
  );
}
