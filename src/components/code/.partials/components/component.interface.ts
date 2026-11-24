import type { CSSProperties } from 'react';
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';

type CodeOwnProps = {
  code: string;
  syntax?: SyntaxHighlighterProps['style'];
  isLineNumbers?: boolean;
  isInlineLineNumbers?: boolean;
  isInlineStyles?: boolean;
  isWrapLines?: boolean;
  isWrapLongLines?: boolean;
  style?: CSSProperties;
};

export type CodeProps = CodeOwnProps &
  Omit<
    SyntaxHighlighterProps,
    | 'children'
    | 'style'
    | 'customStyle'
    | 'showLineNumbers'
    | 'showInlineLineNumbers'
    | 'useInlineStyles'
    | 'wrapLines'
    | 'wrapLongLines'
    | 'lineNumberStyle'
    | 'lineNumberContainerStyle'
  >;