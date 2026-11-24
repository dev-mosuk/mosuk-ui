import { PopoverOverviewPopupProps } from '@/components/popover/.partials/components/overview-popup/component.interface';
import { POPOVER_DEFAULT_VARIANT } from '@/components/popover/.partials/constants/component.constants';
import styles from '@/components/popover/.partials/styles/component.module.css';
import { Popover as BaseUIPopover } from '@base-ui/react/popover';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function PopoverOverviewPopup<C extends ElementType = 'div'>({
  as,
  ref,
  variant = POPOVER_DEFAULT_VARIANT,
  className,
  children,
  ...rest
}: PopoverOverviewPopupProps<C>) {
  const Component = (as ?? 'div') as ElementType;

  return (
    <BaseUIPopover.Popup
      {...rest}
      data-variant={variant}
      className={classNames(
        'mosuk-popover-content',
        styles.content,
        className,
      )}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUIPopover.Popup>
  );
}
