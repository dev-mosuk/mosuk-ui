'use client';

import { ComboboxPortalPositionerProps } from '@/components/actions/combobox/.partials/components/portal/positioner/component.interface';
import styles from '@/components/actions/combobox/.partials/styles/component.module.css';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortalPositioner({
  ref,
  ...rest
}: ComboboxPortalPositionerProps) {
  return (
    <Combobox.Positioner
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-combobox-positioner',
        styles.ComboboxPortalPositioner,
        rest?.className,
      )}
    >
      {rest?.children}
    </Combobox.Positioner>
  );
}
