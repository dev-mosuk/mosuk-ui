import styles from '@/components/collections/accordion/component.module.css';
import { AccordionHeaderProps } from '@/components/collections/accordion/item/header/component.interface';
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import classNames from 'classnames';
import React from 'react';

export function AccordionHeader({ ...rest }: AccordionHeaderProps) {
  return (
    <BaseAccordion.Header
      {...rest}
      className={classNames(
        'mosuk-accordion-item-header',
        styles.header,
        rest.className,
      )}
    >
      {rest?.children}
    </BaseAccordion.Header>
  );
}
