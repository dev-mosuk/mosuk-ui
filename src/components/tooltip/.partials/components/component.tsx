'use client';

import { TooltipProps } from '@/components/tooltip/.partials/components/component.interface';
import { TooltipProvider } from '@/components/tooltip/.partials/providers/provider';
import { Tooltip as BaseUITooltip } from '@base-ui/react/tooltip';
import React, { useRef } from 'react';

export function Tooltip({
  isOpen,
  isDisabled,
  handle: handleProp,
  children,
  ...rest
}: TooltipProps) {
  const fallbackHandleRef = useRef(BaseUITooltip.createHandle());
  const handle = handleProp ?? fallbackHandleRef.current;

  return (
    <TooltipProvider handle={handle}>
      <BaseUITooltip.Root
        {...rest}
        open={isOpen}
        disabled={isDisabled}
        handle={handle}
      >
        {children}
      </BaseUITooltip.Root>
    </TooltipProvider>
  );
}
