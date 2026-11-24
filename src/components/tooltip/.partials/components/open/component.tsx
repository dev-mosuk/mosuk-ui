'use client';

import { TooltipOpenProps } from '@/components/tooltip/.partials/components/open/component.interface';
import { TOOLTIP_OPEN_DEFAULT_DELAY } from '@/components/tooltip/.partials/constants/component.constants';
import { useTooltip } from '@/components/tooltip/.partials/hooks/hook';
import styles from '@/components/tooltip/.partials/styles/component.module.css';
import { Tooltip as BaseUITooltip } from '@base-ui/react/tooltip';
import classNames from 'classnames';
import React, { type ElementType, useId, useRef } from 'react';

export function TooltipOpen<C extends ElementType = 'button'>({
  as,
  ref,
  isDisabled,
  delay = TOOLTIP_OPEN_DEFAULT_DELAY,
  closeDelay,
  handle: handleProp,
  id: idProp,
  className,
  children,
  ...rest
}: TooltipOpenProps<C>) {
  const { handle: contextHandle } = useTooltip();
  const handle = handleProp ?? contextHandle;
  const fallbackId = useId();
  const triggerId = idProp ?? fallbackId;
  const isTouchPointerRef = useRef(false);
  const Component = (as ?? 'button') as ElementType;

  return (
    <BaseUITooltip.Trigger
      {...rest}
      id={triggerId}
      handle={handle}
      delay={delay}
      closeDelay={closeDelay}
      closeOnClick={false}
      disabled={isDisabled}
      className={classNames(
        'mosuk-tooltip-open',
        styles.trigger,
        className,
      )}
      render={<Component ref={ref} />}
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
      {children}
    </BaseUITooltip.Trigger>
  );
}
