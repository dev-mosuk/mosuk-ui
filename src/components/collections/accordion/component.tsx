import { AccordionProps } from '@/components/collections/accordion/component.interface';
import styles from '@/components/collections/accordion/component.module.css';
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import classNames from 'classnames';
import React from 'react';

export function Accordion({ ...rest }: AccordionProps) {
  return (
    <BaseAccordion.Root
      {...rest}
      className={classNames(
        'mosuk-accordion',
        styles.accordion,
        rest.className,
      )}
    >
      {rest?.children}
    </BaseAccordion.Root>
  );
}
