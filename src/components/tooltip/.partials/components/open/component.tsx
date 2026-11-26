'use client';

import { TooltipOpenProps } from '@/components/tooltip/.partials/components/open/component.interface';
import { TOOLTIP_OPEN_DEFAULT_DELAY } from '@/components/tooltip/.partials/constants/component.constants';
import styles from '@/components/tooltip/.partials/styles/component.module.css';
import { Tooltip as BaseUITooltip } from '@base-ui/react/tooltip';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function TooltipOpen<C extends ElementType = 'button'>({
  as,
  ref,
  isDisabled,
  delay = TOOLTIP_OPEN_DEFAULT_DELAY,
  closeDelay,
  handle,
  id,
  className,
  children,
  ...rest
}: TooltipOpenProps<C>) {
  const Component = (as ?? 'button') as ElementType;

  return (
    <BaseUITooltip.Trigger
      {...rest}
      id={id}
      handle={handle}
      delay={delay}
      closeDelay={closeDelay}
      disabled={isDisabled}
      className={classNames('mosuk-tooltip-open', styles.trigger, className)}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUITooltip.Trigger>
  );
}
