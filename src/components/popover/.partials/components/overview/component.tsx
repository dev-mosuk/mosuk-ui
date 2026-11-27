import { PopoverOverviewProps } from '@/components/popover/.partials/components/overview/component.interface';
import {
  POPOVER_OVERVIEW_DEFAULT_ALIGN,
  POPOVER_OVERVIEW_DEFAULT_SIDE_OFFSET,
} from '@/components/popover/.partials/constants/component.constants';
import { usePopover } from '@/components/popover/.partials/hooks/hook';
import styles from '@/components/popover/.partials/styles/component.module.css';
import { Popover as BaseUIPopover } from '@base-ui/react/popover';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function PopoverOverview<C extends ElementType = 'div'>({
  as,
  ref,
  className,
  children,
  align,
  sideOffset,
  ...rest
}: PopoverOverviewProps<C>) {
  const { keepMounted, container } = usePopover();
  const Component = (as ?? 'div') as ElementType;

  return (
    <BaseUIPopover.Portal
      keepMounted={keepMounted}
      container={container}
      className={classNames(
        'mosuk-popover',
        'group/popover',
        styles.portal,
      )}
    >
      <BaseUIPopover.Positioner
        {...rest}
        align={align ?? POPOVER_OVERVIEW_DEFAULT_ALIGN}
        sideOffset={sideOffset ?? POPOVER_OVERVIEW_DEFAULT_SIDE_OFFSET}
        className={classNames(
          'mosuk-popover-popover',
          styles.popover,
          className,
        )}
        render={<Component ref={ref} />}
      >
        {children}
      </BaseUIPopover.Positioner>
    </BaseUIPopover.Portal>
  );
}
