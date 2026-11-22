import { AccordionContentProps } from '@/components/accordion/.partials/components/content/component.interface';
import styles from '@/components/accordion/.partials/styles/component.module.css';
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
