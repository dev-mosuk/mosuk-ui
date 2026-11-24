'use client';

import type { CodeProps } from '@/components/code/.partials/components/component.interface';
import {
  CODE_DEFAULT_IS_INLINE_LINE_NUMBERS,
  CODE_DEFAULT_IS_INLINE_STYLES,
  CODE_DEFAULT_IS_LINE_NUMBERS,
  CODE_DEFAULT_IS_WRAP_LINES,
  CODE_DEFAULT_IS_WRAP_LONG_LINES,
} from '@/components/code/.partials/constants/component.constants';
import { useCodeTheme } from '@/components/code/.partials/hooks/hook';
import styles from '@/components/code/.partials/styles/component.module.css';
import {
  syntaxDark,
  syntaxLight,
} from '@/components/code/.partials/styles/syntax';
import { Theme } from '@/providers/theme/.partials/provider.enums';
import classNames from 'classnames';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export function Code({
  code,
  syntax,
  isLineNumbers = CODE_DEFAULT_IS_LINE_NUMBERS,
  isInlineLineNumbers = CODE_DEFAULT_IS_INLINE_LINE_NUMBERS,
  isInlineStyles = CODE_DEFAULT_IS_INLINE_STYLES,
  isWrapLines = CODE_DEFAULT_IS_WRAP_LINES,
  isWrapLongLines = CODE_DEFAULT_IS_WRAP_LONG_LINES,
  className,
  style,
  ...rest
}: CodeProps) {
  const theme = useCodeTheme();
  const syntaxStyle =
    syntax ?? (theme === Theme.Dark ? syntaxDark : syntaxLight);

  return (
    <SyntaxHighlighter
      {...rest}
      style={syntaxStyle}
      showLineNumbers={isLineNumbers}
      showInlineLineNumbers={isInlineLineNumbers}
      useInlineStyles={isInlineStyles}
      wrapLines={isWrapLines}
      wrapLongLines={isWrapLongLines}
      customStyle={{ ...style }}
      className={classNames(
        'mosuk-code',
        '@container/code',
        'group/code',
        styles.code,
        className,
      )}
    >
      {code}
    </SyntaxHighlighter>
  );
}