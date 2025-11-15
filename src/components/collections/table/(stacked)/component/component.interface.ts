import { HTMLAttributes, Ref } from 'react';

export interface TableStackedProps extends HTMLAttributes<HTMLUListElement> {}

export interface TableStackedRowProps extends HTMLAttributes<HTMLLIElement> {
    ref?: Ref<HTMLLIElement>;
    index?: number;
}