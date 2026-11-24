'use client';

import type { FileIconProps } from '@/components/file/.partials/components/icon/component.interface';
import { FileContext } from '@/components/file/.partials/providers/context/context';
import styles from '@/components/file/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { FileIcon as Glyph, defaultStyles } from 'react-file-icon';

type FileIconPreset = {
  type?: string;
  color?: string;
  foldColor?: string;
  glyphColor?: string;
  labelColor?: string;
  labelTextColor?: string;
  labelUppercase?: boolean;
  gradientOpacity?: number;
  fold?: boolean;
  radius?: number;
};

const presets = defaultStyles as Record<string, FileIconPreset>;

export function FileIcon({ className, style }: FileIconProps) {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error('File.Icon must be used inside File');
  }

  const extension = context.extension;
  const preset = extension ? presets[extension] : undefined;

  return (
    <span
      className={classNames('mosuk-file-icon', styles.icon, className)}
      style={style}
      aria-hidden
    >
      <Glyph
        extension={extension ?? undefined}
        {...(preset ?? { type: 'document' })}
      />
    </span>
  );
}
