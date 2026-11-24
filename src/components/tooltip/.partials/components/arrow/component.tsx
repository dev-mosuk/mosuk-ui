'use client';

import { TooltipArrowProps } from '@/components/tooltip/.partials/components/arrow/component.interface';
import styles from '@/components/tooltip/.partials/styles/component.module.css';
import { Tooltip as BaseUITooltip } from '@base-ui/react/tooltip';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function TooltipArrow<C extends ElementType = 'div'>({
  as,
  ref,
  className,
  children,
  ...rest
}: TooltipArrowProps<C>) {
  const Component = (as ?? 'div') as ElementType;

  return (
    <BaseUITooltip.Arrow
      {...rest}
      className={classNames(
        'mosuk-tooltip-arrow',
        styles.arrow,
        className,
      )}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUITooltip.Arrow>
  );
}
