import type { SegmentContextProps } from '@/components/segment/.partials/providers/context/context.interface';
import type { ReactNode } from 'react';

export interface SegmentProviderProps extends SegmentContextProps {
  children?: ReactNode;
}
