'use client';

import { ContextMenuOverviewPopupProps } from '@/components/context-menu/.partials/components/overview-popup/component.interface';
import { CONTEXT_MENU_DEFAULT_VARIANT } from '@/components/context-menu/.partials/constants/component.constants';
import styles from '@/components/context-menu/.partials/styles/component.module.css';
import { ContextMenu as BaseUIContextMenu } from '@base-ui/react/context-menu';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function ContextMenuOverviewPopup<C extends ElementType = 'div'>({
  as,
  ref,
  variant = CONTEXT_MENU_DEFAULT_VARIANT,
  className,
  children,
  ...rest
}: ContextMenuOverviewPopupProps<C>) {
  const Component = (as ?? 'div') as ElementType;

  return (
    <BaseUIContextMenu.Popup
      {...rest}
      data-variant={variant}
      className={classNames(
        'mosuk-context-menu-content',
        styles.content,
        className,
      )}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUIContextMenu.Popup>
  );
}
