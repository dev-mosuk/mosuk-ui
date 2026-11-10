import { DropdownDropdownContentButtonProps } from '@/components/overlays/dropdown/.partials/components/dropdown/content/button/component.interface';
import styles from '@/components/overlays/dropdown/.partials/styles/component.module.css';
import classNames from 'classnames';
import { ArrowUp, ChevronUp } from 'lucide-react';
import React from 'react';

export function DropdownDropdownContentButton({
  isActive,
  iconChevron,
  iconArrow,
  type = 'button',
  ...rest
}: DropdownDropdownContentButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      data-active={isActive ? '' : undefined}
      className={classNames(
        'mosuk-dropdown-content-button',
        styles.button,
        {
          [styles.active]: isActive,
        },
        rest?.className,
      )}
    >
      {rest?.children}

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
    </button>
  );
}
