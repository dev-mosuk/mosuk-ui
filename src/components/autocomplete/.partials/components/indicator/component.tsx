'use client';

import type { AutocompleteIndicatorProps } from '@/components/autocomplete/.partials/components/indicator/component.interface';
import { useAutocomplete } from '@/components/autocomplete/.partials/hooks/hook';
import styles from '@/components/autocomplete/.partials/styles/component.module.css';
import classNames from 'classnames';
import { ChevronDown } from 'lucide-react';
import React from 'react';

export function AutocompleteIndicator({
  className,
  children,
  ...rest
}: AutocompleteIndicatorProps) {
  const { isOpen } = useAutocomplete();

  return (
    <span
      {...rest}
      data-open={isOpen || undefined}
      className={classNames(
        'mosuk-autocomplete-indicator',
        styles.indicator,
        className,
      )}
    >
      {children ?? <ChevronDown className={styles.icon} />}
    </span>
  );
}
