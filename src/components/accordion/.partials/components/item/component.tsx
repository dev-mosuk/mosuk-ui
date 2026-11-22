import { AccordionItemProps } from '@/components/accordion/.partials/components/item/component.interface';
import styles from '@/components/accordion/.partials/styles/component.module.css';
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import classNames from 'classnames';
import React from 'react';

export function AccordionItem({
  isDisabled,
  className,
  children,
  ...rest
}: AccordionItemProps) {
  return (
    <BaseAccordion.Item
      {...rest}
      disabled={isDisabled}
      className={classNames('mosuk-accordion-item', styles.item, className)}
    >
      {children}
    </BaseAccordion.Item>
  );
}
