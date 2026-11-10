'use client';

import { ComboboxPortalBackdropProps } from '@/components/actions/combobox/.partials/components/portal/backdrop/component.interface';
import styles from '@/components/actions/combobox/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortalBackdrop({
  ref,
  ...rest
}: ComboboxPortalBackdropProps) {
  return (
    <Combobox.Backdrop
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-portal-backdrop',
        styles.ComboboxPortalBackdrop,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Backdrop>
  );
}
