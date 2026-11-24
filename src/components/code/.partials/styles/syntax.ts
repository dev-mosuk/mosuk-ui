import type { CSSProperties } from 'react';
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';

type SyntaxStyle = NonNullable<SyntaxHighlighterProps['style']>;

type Palette = {
  base: string;
  comment: string;
  keyword: string;
  string: string;
  fn: string;
  tag: string;
};

/** Muted docs palette (HeroUI heroui-docs-*): color on keywords, strings, functions, tags. */
function createSyntaxStyle(palette: Palette): SyntaxStyle {
  const token = (color: string): CSSProperties => ({ color });

  const host: CSSProperties = {
    background: 'transparent',
    color: palette.base,
    direction: 'ltr',
    fontFamily:
      '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
    hyphens: 'none',
    lineHeight: '1.5',
    MozHyphens: 'none',
    MozTabSize: '2',
    msHyphens: 'none',
    OTabSize: '2',
    tabSize: '2',
    textAlign: 'left',
    WebkitHyphens: 'none',
    whiteSpace: 'pre',
    wordBreak: 'normal',
    wordSpacing: 'normal',
  };

  return {
    'code[class*="language-"]': host,
    'pre[class*="language-"]': host,
    comment: token(palette.comment),
    prolog: token(palette.comment),
    cdata: token(palette.comment),
    doctype: token(palette.keyword),
    punctuation: token(palette.base),
    entity: token(palette.base),
    'attr-name': token(palette.fn),
    'class-name': token(palette.tag),
    boolean: token(palette.string),
    constant: token(palette.string),
    number: token(palette.string),
    atrule: token(palette.keyword),
    keyword: token(palette.keyword),
    property: token(palette.fn),
    tag: token(palette.tag),
    symbol: token(palette.string),
    deleted: token(palette.keyword),
    important: token(palette.keyword),
    selector: token(palette.tag),
    string: token(palette.string),
    char: token(palette.string),
    builtin: token(palette.tag),
    inserted: token(palette.string),
    regex: token(palette.string),
    'attr-value': token(palette.string),
    variable: token(palette.base),
    operator: token(palette.base),
    function: token(palette.fn),
    url: token(palette.string),
    namespace: token(palette.base),
    bold: { fontWeight: 'bold' },
    italic: { fontStyle: 'italic' },
  };
}

export const syntaxLight = createSyntaxStyle({
  base: '#52525B',
  comment: '#A1A1AA',
  fn: '#7C3AED',
  keyword: '#D6336C',
  string: '#0369A1',
  tag: '#18181B',
});

export const syntaxDark = createSyntaxStyle({
  base: '#A1A1AA',
  comment: '#5C5C66',
  fn: '#C4B5FD',
  keyword: '#F38BA8',
  string: '#7CC4FF',
  tag: '#FAFAFA',
});
