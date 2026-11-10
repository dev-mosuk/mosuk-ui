'use client';

import { TooltipArrowProps } from '@/components/overlays/tooltip/.partials/components/arrow/component.interface';
import styles from '@/components/overlays/tooltip/.partials/styles/component.module.css';
import { Tooltip } from '@base-ui/react/tooltip';
import classNames from 'classnames';
import React from 'react';

export function TooltipArrow({ ...rest }: TooltipArrowProps) {
  return (
    <Tooltip.Arrow
      {...rest}
      className={classNames(
        'mosuk-tooltip-arrow',
        styles.arrow,
        rest?.className,
      )}
    >
      {rest?.children}
    </Tooltip.Arrow>
  );
}

TooltipArrow.displayName = 'Tooltip.Arrow';
