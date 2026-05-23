'use client';

import { ComboboxPortalProps } from '@/components/actions/combobox/component/.partials/components/portal/component.interface';
import { Combobox } from '@base-ui/react/combobox';
import classNames from 'classnames';
import React from 'react';

export function ComboboxPortal({ ref, ...rest }: ComboboxPortalProps) {
  return (
    <Combobox.Portal
      {...rest}
      ref={ref}
      className={classNames('mosuk-combobox-portal', rest?.className)}
    >
      {rest?.children}
    </Combobox.Portal>
  );
}
