import { HTMLAttributes } from 'react';

export interface PaginationTableHeadColumnProps
  extends HTMLAttributes<HTMLButtonElement> {
  sort?: string;
}
