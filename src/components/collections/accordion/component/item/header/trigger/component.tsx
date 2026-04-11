import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import classNames from 'classnames';
import React from 'react';
import styles from '../../../component.module.css';
import { AccordionHeaderTriggerProps } from './component.interface';

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
