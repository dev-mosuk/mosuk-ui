'use client';

import { TooltipProps } from '@/components/tooltip/.partials/components/component.interface';
import { TooltipContent } from '@/components/tooltip/.partials/components/content/component';
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';
import classNames from 'classnames';
import React, {
  Children,
  ReactElement,
  ReactNode,
  isValidElement,
  useId,
  useRef,
} from 'react';

export function Tooltip({
  children,
  delay = 0,
  closeDelay,
  handle: handleProp,
  ...rest
}: TooltipProps) {
  const fallbackHandleRef = useRef(TooltipPrimitive.createHandle());
  const handle = handleProp ?? fallbackHandleRef.current;
  const triggerId = useId();
  const isTouchPointerRef = useRef(false);

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
    <TooltipPrimitive.Root {...rest} handle={handle}>
      <TooltipPrimitive.Trigger
        id={triggerId}
        delay={delay}
        closeDelay={closeDelay}
        closeOnClick={false}
        className={classNames('mosuk-tooltip-trigger')}
        render={isValidElement(triggerChild) ? triggerChild : undefined}
        onPointerDown={(event) => {
          isTouchPointerRef.current = event.pointerType === 'touch';
        }}
        onClick={() => {
          if (!isTouchPointerRef.current) {
            return;
          }

          if (handle.isOpen) {
            handle.close();
          } else {
            handle.open(triggerId);
          }
        }}
      >
        {!isValidElement(triggerChild) ? triggerChild : null}
      </TooltipPrimitive.Trigger>
      {contentChildren}
    </TooltipPrimitive.Root>
  );
}
