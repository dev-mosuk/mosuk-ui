import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import classNames from 'classnames';
import React from 'react';
import styles from '../component.module.css';
import { AccordionItemProps } from './component.interface';

export function AccordionItem({ ...rest }: AccordionItemProps) {
  return (
    <BaseAccordion.Item
      {...rest}
      className={classNames(
        'mosuk-accordion-item',
        styles.item,
        rest.className
      )}
    >
      {rest?.children}
    </BaseAccordion.Item>
  );
}
