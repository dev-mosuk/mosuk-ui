import styles from '@/components/collections/accordion/component/component.module.css';
import { AccordionHeaderTriggerProps } from '@/components/collections/accordion/component/item/header/trigger/component.interface';
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
