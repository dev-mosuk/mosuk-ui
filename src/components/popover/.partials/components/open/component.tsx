import { PopoverOpenProps } from '@/components/popover/.partials/components/open/component.interface';
import styles from '@/components/popover/.partials/styles/component.module.css';
import { Popover as BaseUIPopover } from '@base-ui/react/popover';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function PopoverOpen<C = 'button'>({
  as,
  ref,
  isDisabled,
  className,
  children,
  ...rest
}: PopoverOpenProps<C>) {
  const Component = (as ?? 'button') as ElementType;
  // string tags: only `button` is native; components (e.g. Button) default to native
  const nativeButton = as == null || as === 'button' || typeof as !== 'string';

  return (
    <BaseUIPopover.Trigger
      {...rest}
      disabled={isDisabled}
      nativeButton={nativeButton}
      className={classNames('mosuk-popover-open', styles.trigger, className)}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUIPopover.Trigger>
  );
}
