import { PopoverCloseProps } from '@/components/popover/.partials/components/close/component.interface';
import { Popover as BaseUIPopover } from '@base-ui/react/popover';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function PopoverClose<C = 'button'>({
  as,
  ref,
  isDisabled,
  className,
  children,
  ...rest
}: PopoverCloseProps<C>) {
  const Component = (as ?? 'button') as ElementType;
  // string tags: only `button` is native; components (e.g. Button) default to native
  const nativeButton = as == null || as === 'button' || typeof as !== 'string';

  return (
    <BaseUIPopover.Close
      {...rest}
      disabled={isDisabled}
      nativeButton={nativeButton}
      className={classNames('mosuk-popover-close', className)}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUIPopover.Close>
  );
}
