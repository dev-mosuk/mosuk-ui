import styles from '@/components/collections/accordion/component.module.css';
import { AccordionContentProps } from '@/components/collections/accordion/item/content/component.interface';
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import classNames from 'classnames';
import React from 'react';

export function AccordionContent({ ...rest }: AccordionContentProps) {
  return (
    <BaseAccordion.Panel
      {...rest}
      className={classNames(
        'mosuk-accordion-item-content',
        styles.content,
        rest.className,
      )}
    >
      {rest?.children}
    </BaseAccordion.Panel>
  );
}
