'use client';

import { UploadProps } from '@/components/upload/.partials/components/component.interface';
import { UPLOAD_DEFAULT_AS } from '@/components/upload/.partials/constants/component.constants';
import { UploadProvider } from '@/components/upload/.partials/providers/provider';
import styles from '@/components/upload/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ChangeEvent, ElementType, useId } from 'react';

export function Upload<C extends ElementType = 'fieldset'>({
  as,
  accept,
  capture,
  multiple,
  form,
  id,
  name,
  isDisabled,
  isReadOnly,
  isRequired,
  onChange,
  ...rest
}: UploadProps<C>) {
  const Component = (as || UPLOAD_DEFAULT_AS) as ElementType;
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputName = name ?? inputId;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    onChange?.(Array.from(e.target.files));
  };

  return (
    <UploadProvider id={inputId}>
      <Component
        {...rest}
        disabled={isDisabled}
        className={classNames(
          'mosuk-upload',
          'group/upload',
          styles.fieldset,
          rest?.className,
        )}
      >
        <input
          id={inputId}
          name={inputName}
          type='file'
          accept={accept}
          capture={capture}
          multiple={multiple}
          form={form}
          disabled={isDisabled}
          readOnly={isReadOnly}
          required={isRequired}
          onChange={handleFileChange}
          className={classNames('mosuk-upload-input', styles.input)}
        />
        {rest?.children}
      </Component>
    </UploadProvider>
  );
}
