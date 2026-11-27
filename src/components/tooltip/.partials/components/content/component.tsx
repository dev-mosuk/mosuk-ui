'use client';

import { TooltipContentProps } from '@/components/tooltip/.partials/components/content/component.interface';
import {
  TOOLTIP_CONTENT_DEFAULT_SIDE_OFFSET,
  TOOLTIP_DEFAULT_VARIANT,
} from '@/components/tooltip/.partials/constants/component.constants';
import styles from '@/components/tooltip/.partials/styles/component.module.css';
import { Tooltip as BaseUITooltip } from '@base-ui/react/tooltip';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function TooltipContent<C extends ElementType = 'div'>({
  as,
  ref,
  variant = TOOLTIP_DEFAULT_VARIANT,
  sideOffset = TOOLTIP_CONTENT_DEFAULT_SIDE_OFFSET,
  container,
  keepMounted,
  className,
  style,
  children,
  ...positioner
}: TooltipContentProps<C>) {
  const Component = (as ?? 'div') as ElementType;

  return (
    <BaseUITooltip.Portal container={container} keepMounted={keepMounted}>
      <BaseUITooltip.Positioner
        {...positioner}
        sideOffset={sideOffset}
        className={classNames(
          'mosuk-tooltip-positioner',
          'group/tooltip',
          styles.positioner,
        )}
      >
        <BaseUITooltip.Popup
          data-variant={variant}
          className={classNames(
            'mosuk-tooltip-content',
            styles.content,
            className,
          )}
          style={style}
          render={<Component ref={ref} />}
        >
          {children}
        </BaseUITooltip.Popup>
      </BaseUITooltip.Positioner>
    </BaseUITooltip.Portal>
  );
}
