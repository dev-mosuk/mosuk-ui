import type { HTMLAttributes, ReactNode } from 'react';

export type AutocompleteFilterFn = (
  textValue: string,
  query: string,
) => boolean;

export type AutocompleteFilterProps = {
  filter?: AutocompleteFilterFn;
  empty?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
