import styles from '@/components/collections/accordion/component.module.css';
import { AccordionItemProps } from '@/components/collections/accordion/item/component.interface';
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import classNames from 'classnames';
import React from 'react';

export function AccordionItem({ ...rest }: AccordionItemProps) {
  return (
    <BaseAccordion.Item
      {...rest}
      className={classNames(
        'mosuk-accordion-item',
        styles.item,
        rest.className,
      )}
    >
      {rest?.children}
    </BaseAccordion.Item>
  );
}
