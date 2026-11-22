import type { UseProgressCircleProps } from '@/components/progress-circle/.partials/hooks/hook.interface';
import { ProgressCircleContext } from '@/components/progress-circle/.partials/providers/context/context';
import { useContext } from 'react';

export function useProgressCircle(): UseProgressCircleProps {
  const context = useContext(ProgressCircleContext);

  if (!context) {
    throw new Error('useProgressCircle must be used within ProgressCircle');
  }

  return context;
}
