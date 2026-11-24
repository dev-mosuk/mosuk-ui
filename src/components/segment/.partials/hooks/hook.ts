import type { UseSegmentProps } from '@/components/segment/.partials/hooks/hook.interface';
import { SegmentContext } from '@/components/segment/.partials/providers/context/context';
import { useContext } from 'react';

export function useSegment(): UseSegmentProps {
  const context = useContext(SegmentContext);

  if (!context) {
    throw new Error('useSegment must be used within Segment');
  }

  return context;
}
