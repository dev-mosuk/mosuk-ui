import { Button } from '@/components/button';
import { DropdownDropdownContentButtonProps } from '@/components/dropdown/.partials/components/dropdown/content/button/component.interface';
import { DROPDOWN_CONTENT_BUTTON_DEFAULT_SIZE } from '@/components/dropdown/.partials/constants/component.constants';
import styles from '@/components/dropdown/.partials/styles/component.module.css';
import classNames from 'classnames';
import { ArrowUp, ChevronUp } from 'lucide-react';
import React from 'react';

export function DropdownDropdownContentButton<C = 'button'>({
  isActive,
  iconChevron,
  iconArrow,
  className,
  children,
  ...rest
}: DropdownDropdownContentButtonProps<C>) {
  return (
    <Button
      {...(rest as Button.Props<C>)}
      as={(rest.as ?? 'button') as C}
      size={rest.size ?? DROPDOWN_CONTENT_BUTTON_DEFAULT_SIZE}
      width={rest.width ?? Button.ENUMS.Width.Full}
      variant={rest.variant ?? Button.ENUMS.Variant.Ghost}
      press={rest.press ?? Button.ENUMS.Press.None}
      data-active={isActive ? '' : undefined}
      className={classNames(
        'mosuk-dropdown-content-button',
        styles.button,
        className,
      )}
    >
      {children}

      {iconChevron ? (
        <ChevronUp
          data-direction={iconChevron}
          className={classNames(styles.chevron, styles.trailing)}
        />
      ) : null}

      {iconArrow ? (
        <ArrowUp
          data-direction={iconArrow}
          className={classNames(styles.arrow, {
            [styles.trailing]: !iconChevron,
          })}
        />
      ) : null}
    </Button>
  );
}
