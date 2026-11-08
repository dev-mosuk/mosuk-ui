'use client';

import { TooltipContentProps } from '@/components/overlays/tooltip/component/.partials/components/content/component.interface';
import styles from '@/components/overlays/tooltip/component/.partials/styles/component.module.css';
import { Tooltip } from '@base-ui/react/tooltip';
import classNames from 'classnames';
import React from 'react';

export function TooltipContent({
  sideOffset = 8,
  container,
  keepMounted,
  className,
  style,
  render,
  children,
  ...positioner
}: TooltipContentProps) {
  return (
    <Tooltip.Portal container={container} keepMounted={keepMounted}>
      <Tooltip.Positioner
        {...positioner}
        sideOffset={sideOffset}
        className={classNames('mosuk-tooltip-positioner', styles.positioner)}
      >
        <Tooltip.Popup
          className={classNames(
            'mosuk-tooltip-content',
            styles.content,
            className,
          )}
          style={style}
          render={render}
        >
          {children}
        </Tooltip.Popup>
      </Tooltip.Positioner>
    </Tooltip.Portal>
  );
}
