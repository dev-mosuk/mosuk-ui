'use client';

import classNames from 'classnames';
import React, { ChangeEvent, useEffect, useId } from 'react';
import styles from '../../component.module.css';
import { useUpload } from '../../hooks/hook';
import { UploadInputProps } from './component.interface';

export function UploadInput({ ...rest }: UploadInputProps) {
  const { setId, setName } = useUpload();

  const uniqueId = rest?.id ?? useId();
  const uniqueName = rest?.name ?? uniqueId;

  useEffect(() => {
    setId(uniqueId);
    setName(uniqueName);
  }, [setId, setName, uniqueId, uniqueName]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const files = Array.from(e.target.files);
    rest?.onChange?.(files);
  };

  return (
    <input
      {...rest}
      id={uniqueId}
      name={uniqueName}
      type="file"
      onChange={handleFileChange}
      className={classNames(
        'mosuk-upload-input',
        styles.input,
        rest?.className
      )}
    />
  );
}
