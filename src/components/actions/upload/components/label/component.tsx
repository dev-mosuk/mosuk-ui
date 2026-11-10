'use client';

import styles from '@/components/actions/upload/component.module.css';
import { UploadLabelProps } from '@/components/actions/upload/components/label/component.interface';
import { UploadContext } from '@/components/actions/upload/providers/context/context';
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
