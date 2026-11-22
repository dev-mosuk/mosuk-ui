import { AccordionHeaderTriggerProps } from '@/components/accordion/.partials/components/header-trigger/component.interface';
import styles from '@/components/accordion/.partials/styles/component.module.css';
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import classNames from 'classnames';
import React from 'react';

export function AccordionHeaderTrigger({
  ...rest
}: AccordionHeaderTriggerProps) {
  return (
    <BaseAccordion.Trigger
      {...rest}
      className={classNames(
        'mosuk-accordion-item-header-trigger',
        styles.trigger,
        rest.className,
      )}
    >
      {rest?.children}
    </BaseAccordion.Trigger>
  );
}
