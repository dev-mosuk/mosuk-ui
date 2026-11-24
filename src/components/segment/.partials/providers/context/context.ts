import type { SegmentContextProps } from '@/components/segment/.partials/providers/context/context.interface';
import { createContext } from 'react';

export const SegmentContext = createContext<SegmentContextProps | null>(null);
