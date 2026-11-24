import type { Button } from '@/components/button';
import type { ReactNode } from 'react';

export type MultiSelectChipProps = Omit<Button.Props, 'children'> & {
  value: string;
  children?: ReactNode;
};
