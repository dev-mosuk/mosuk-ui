import { Accordion as BaseAccordion } from '@base-ui-components/react/accordion';
import classNames from 'classnames';
import React from 'react';
import {
  AccordionProps
} from './component.interface';
import styles from './component.module.css';

export function Accordion({ ...rest }: AccordionProps) {
  return (
    <BaseAccordion.Root
      {...rest}
      className={classNames(
        'mosuk-accordion',
        styles.accordion,
        rest.className
      )}
    >
      {rest?.children}
    </BaseAccordion.Root>
  );
}
