'use client';

import { TooltipProps } from '@/components/overlays/tooltip/.partials/components/component.interface';
import { TooltipContent } from '@/components/overlays/tooltip/.partials/components/content/component';
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';
import classNames from 'classnames';
import React, {
  Children,
  ReactElement,
  ReactNode,
  isValidElement,
} from 'react';

export function Tooltip({
  children,
  delay = 0,
  closeDelay,
  ...rest
}: TooltipProps) {
  const contentChildren: ReactElement[] = [];
  const triggerChildren: ReactNode[] = [];

  Children.forEach(Children.toArray(children), (child) => {
    if (isValidElement(child) && child.type === TooltipContent) {
      contentChildren.push(child);

      return;
    }

    triggerChildren.push(child);
  });

  if (triggerChildren.length !== 1) {
    throw new Error(
      'Tooltip expects exactly one trigger child alongside Tooltip.Content',
    );
  }

  const triggerChild = triggerChildren[0];

  return (
    <TooltipPrimitive.Root {...rest}>
      <TooltipPrimitive.Trigger
        delay={delay}
        closeDelay={closeDelay}
        className={classNames('mosuk-tooltip-trigger')}
        render={isValidElement(triggerChild) ? triggerChild : undefined}
      >
        {!isValidElement(triggerChild) ? triggerChild : null}
      </TooltipPrimitive.Trigger>
      {contentChildren}
    </TooltipPrimitive.Root>
  );
}
