'use client';

import { UploadProps } from '@/components/upload/component.interface';
import styles from '@/components/upload/component.module.css';
import { UploadProvider } from '@/components/upload/providers/provider';
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
        className={classNames(
          'mosuk-upload',
          '@container/upload',
          'group/upload',
          styles.fieldset,
          rest?.className,
        )}
      >
        {rest?.children}
      </Component>
    </UploadProvider>
  );
}
