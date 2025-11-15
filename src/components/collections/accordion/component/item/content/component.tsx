import { Accordion as BaseAccordion } from '@base-ui-components/react/accordion';
import classNames from 'classnames';
import React from 'react';
import styles from '../../component.module.css';
import { AccordionContentProps } from './component.interface';

export function AccordionContent({ ...rest }: AccordionContentProps) {
  return (
    <BaseAccordion.Panel
      {...rest}
      className={classNames(
        'mosuk-accordion-item-content',
        styles.content,
        rest.className
      )}
    >
      {rest?.children}
    </BaseAccordion.Panel>
  );
}
