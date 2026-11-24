'use client';

import type { ListBoxItemIndicatorProps } from '@/components/list-box/.partials/components/item-indicator/component.interface';
import { ListBoxItemContext } from '@/components/list-box/.partials/providers/context/item-context';
import styles from '@/components/list-box/.partials/styles/component.module.css';
import classNames from 'classnames';
import { Check } from 'lucide-react';
import React, { useContext } from 'react';

export function ListBoxItemIndicator({
  className,
  children,
  ...rest
}: ListBoxItemIndicatorProps) {
  const item = useContext(ListBoxItemContext);
  const isSelected = Boolean(item?.isSelected);

  return (
    <span
      {...rest}
      aria-hidden={!isSelected}
      data-visible={isSelected || undefined}
      className={classNames(
        'mosuk-list-box-item-indicator',
        styles.indicator,
        className,
      )}
    >
      {children ?? <Check />}
    </span>
  );
}
