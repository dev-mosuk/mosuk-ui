'use client';

import { ContextMenuSeparatorProps } from '@/components/context-menu/.partials/components/separator/component.interface';
import styles from '@/components/context-menu/.partials/styles/component.module.css';
import { ContextMenu as BaseUIContextMenu } from '@base-ui/react/context-menu';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function ContextMenuSeparator<C extends ElementType = 'div'>({
  as,
  ref,
  className,
  children,
  ...rest
}: ContextMenuSeparatorProps<C>) {
  const Component = (as ?? 'div') as ElementType;

  return (
    <BaseUIContextMenu.Separator
      {...rest}
      className={classNames(
        'mosuk-context-menu-separator',
        styles.separator,
        className,
      )}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUIContextMenu.Separator>
  );
}
