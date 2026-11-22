'use client';

import { UploadProps } from '@/components/upload/.partials/components/component.interface';
import { UploadProvider } from '@/components/upload/.partials/providers/provider';
import styles from '@/components/upload/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function Upload<C extends ElementType = 'fieldset'>({
  as,
  isDisabled,
  ...rest
}: UploadProps<C>) {
  const Component = (as || 'fieldset') as ElementType;

  return (
    <UploadProvider>
      <Component
        {...rest}
        disabled={isDisabled}
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
