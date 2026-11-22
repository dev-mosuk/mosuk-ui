'use client';

import { UploadLabelProps } from '@/components/upload/.partials/components/label/component.interface';
import { UploadContext } from '@/components/upload/.partials/providers/context/context';
import styles from '@/components/upload/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType, useContext } from 'react';

export function UploadLabel<C extends ElementType = 'label'>({
  as,
  ...rest
}: UploadLabelProps<C>) {
  const Component = (as || 'label') as ElementType;

  const context = useContext(UploadContext);

  if (!context) {
    throw new Error('Upload.Label must be used within an Upload component.');
  }

  const { id } = context;
  const labelFor = rest?.htmlFor ?? (id || undefined);

  return (
    <Component
      {...rest}
      htmlFor={labelFor}
      className={classNames(
        'mosuk-upload-label',
        styles.label,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
