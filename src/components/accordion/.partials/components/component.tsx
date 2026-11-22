import { AccordionProps } from '@/components/accordion/.partials/components/component.interface';
import styles from '@/components/accordion/.partials/styles/component.module.css';
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import classNames from 'classnames';
import React from 'react';

export function Accordion({
  isDisabled,
  className,
  children,
  ...rest
}: AccordionProps) {
  return (
    <BaseAccordion.Root
      {...rest}
      disabled={isDisabled}
      className={classNames(
        'mosuk-accordion',
        '@container/accordion',
        'group/accordion',
        styles.accordion,
        className,
      )}
    >
      {children}
    </BaseAccordion.Root>
  );
}
