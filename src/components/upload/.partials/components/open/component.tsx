'use client';

import { UploadOpenProps } from '@/components/upload/.partials/components/open/component.interface';
import { UploadContext } from '@/components/upload/.partials/providers/context/context';
import styles from '@/components/upload/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType, useContext } from 'react';

export function UploadOpen<C extends ElementType = 'label'>({
  as,
  ...rest
}: UploadOpenProps<C>) {
  const Component = (as || 'label') as ElementType;

  const context = useContext(UploadContext);

  if (!context) {
    throw new Error('Upload.Open must be used within an Upload component.');
  }

  const { id } = context;
  const labelFor = rest?.htmlFor ?? (id || undefined);

  return (
    <Component
      {...rest}
      htmlFor={labelFor}
      className={classNames(
        'mosuk-upload-open',
        styles.open,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
