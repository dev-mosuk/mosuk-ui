import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import classNames from 'classnames';
import React from 'react';
import styles from '../../component.module.css';
import { AccordionHeaderProps } from './component.interface';

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
