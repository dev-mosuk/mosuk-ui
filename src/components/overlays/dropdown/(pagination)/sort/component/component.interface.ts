import { DropdownProps } from '../../../component/component.interface';

export interface DropdownPaginationSortContextProps {
  currentSort: string | undefined;
  currentOrder: 'asc' | 'desc' | undefined;
  handleSort: (sort: string) => void;
}

export interface DropdownPaginationSortProps extends DropdownProps {
  params: Record<string, any>;
  updateParams: (params: Record<string, any>) => Promise<any>;
}
