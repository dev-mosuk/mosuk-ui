'use client';

import { ContextMenuOpenProps } from '@/components/context-menu/.partials/components/open/component.interface';
import styles from '@/components/context-menu/.partials/styles/component.module.css';
import { ContextMenu as BaseUIContextMenu } from '@base-ui/react/context-menu';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function ContextMenuOpen<C extends ElementType = 'div'>({
  as,
  ref,
  className,
  children,
  ...rest
}: ContextMenuOpenProps<C>) {
  const Component = (as ?? 'div') as ElementType;

  return (
    <BaseUIContextMenu.Trigger
      {...rest}
      className={classNames(
        'mosuk-context-menu-open',
        styles.trigger,
        className,
      )}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUIContextMenu.Trigger>
  );
}
