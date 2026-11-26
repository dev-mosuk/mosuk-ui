'use client';

import { TooltipProps } from '@/components/tooltip/.partials/components/component.interface';
import { Tooltip as BaseUITooltip } from '@base-ui/react/tooltip';
import React from 'react';

export function Tooltip({
  isOpen,
  isDisabled,
  handle,
  children,
  ...rest
}: TooltipProps) {
  return (
    <BaseUITooltip.Root
      {...rest}
      open={isOpen}
      disabled={isDisabled}
      handle={handle}
    >
      {children}
    </BaseUITooltip.Root>
  );
}
