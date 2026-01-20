'use client';

import classNames from 'classnames';
import React, { ElementType } from 'react';
import { UploadProps } from './component.interface';
import styles from './component.module.css';
import { UploadProvider } from './providers/provider';

export function Upload<C extends ElementType = 'fieldset'>({
  as,
  ...rest
}: UploadProps<C>) {
  const Component = (as || 'fieldset') as ElementType;

  return (
    <UploadProvider>
      <Component
        {...rest}
        className={classNames('mosuk-upload', styles.fieldset, rest?.className)}
      >
        {rest?.children}
      </Component>
    </UploadProvider>
  );
}
