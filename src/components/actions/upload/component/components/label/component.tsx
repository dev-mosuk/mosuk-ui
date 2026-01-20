'use client';

import classNames from 'classnames';
import React, { ElementType, useContext } from 'react';
import styles from '../../component.module.css';
import { UploadContext } from '../../providers/context/context';
import { UploadLabelProps } from './component.interface';

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
        rest?.className
      )}
    >
      {rest?.children}
    </Component>
  );
}
