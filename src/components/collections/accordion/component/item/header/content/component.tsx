import { Accordion as BaseAccordion } from '@base-ui-components/react/accordion';
import classNames from 'classnames';
import React from 'react';
import { AccordionHeaderContentProps } from './component.interface';

export function AccordionHeaderContent({
  ...rest
}: AccordionHeaderContentProps) {
  return (
    <BaseAccordion.Trigger
      {...rest}
      className={classNames(
        'mosuk-accordion-item-header-content',
        rest.className
      )}
    >
      {rest?.children}
    </BaseAccordion.Trigger>
  );
}
