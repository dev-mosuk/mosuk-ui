'use client';

import { UploadInputProps } from '@/components/upload/.partials/components/input/component.interface';
import { useUpload } from '@/components/upload/.partials/hooks/hook';
import styles from '@/components/upload/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ChangeEvent, useEffect, useId } from 'react';

export function UploadInput({
  isDisabled,
  isReadOnly,
  isRequired,
  id,
  name,
  className,
  onChange,
  ...rest
}: UploadInputProps) {
  const { setId, setName } = useUpload();

  const uniqueId = id ?? useId();
  const uniqueName = name ?? uniqueId;

  useEffect(() => {
    setId(uniqueId);
    setName(uniqueName);
  }, [setId, setName, uniqueId, uniqueName]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const files = Array.from(e.target.files);
    onChange?.(files);
  };

  return (
    <input
      {...rest}
      id={uniqueId}
      name={uniqueName}
      type='file'
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      onChange={handleFileChange}
      className={classNames('mosuk-upload-input', styles.input, className)}
    />
  );
}
