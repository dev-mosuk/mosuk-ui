import type { AccordionHeaderProps } from '@/components/accordion/.partials/components/header/component.interface';
import styles from '@/components/accordion/.partials/styles/component.module.css';
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import classNames from 'classnames';
import React from 'react';

export function AccordionHeader({
  className,
  children,
  nativeButton,
  ...rest
}: AccordionHeaderProps) {
  return (
    <BaseAccordion.Header
      {...rest}
      className={classNames('mosuk-accordion-item-header', styles.header)}
    >
      <BaseAccordion.Trigger
        nativeButton={nativeButton}
        className={classNames(
          'mosuk-accordion-item-header-trigger',
          styles.trigger,
          className,
        )}
      >
        {children}
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  );
}
