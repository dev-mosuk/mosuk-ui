import { HTMLAttributes } from 'react';

export interface PaginationTableContextProps {
  params: Record<string, any> | undefined;
  updateParams: (params: Record<string, any>) => Promise<any>;
}

export interface PaginationTableProps extends HTMLAttributes<HTMLDivElement> {
  params: Record<string, any> | undefined;
  updateParams: (params: Record<string, any>) => Promise<any>;
}
