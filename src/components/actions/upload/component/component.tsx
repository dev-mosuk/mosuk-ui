'use client';

import { UploadProps } from '@/components/actions/upload/component/component.interface';
import styles from '@/components/actions/upload/component/component.module.css';
import { UploadProvider } from '@/components/actions/upload/component/providers/provider';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
