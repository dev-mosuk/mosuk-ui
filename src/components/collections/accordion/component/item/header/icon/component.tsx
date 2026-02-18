import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import classNames from 'classnames';
import { Plus } from 'lucide-react';
import React from 'react';
import { Icon } from '../../../../../../actions/icon/component/component';
import styles from '../../../component.module.css';
import { AccordionHeaderIconProps } from './component.interface';

export function AccordionHeaderIcon({ ...rest }: AccordionHeaderIconProps) {
  return (
    <Icon
      as={BaseAccordion.Trigger}
      {...rest}
      className={classNames('mosuk-accordion-item-header-icon', styles.icon, rest.className)}
    >
      {rest?.children || <Plus />}
    </Icon>
  );
}
