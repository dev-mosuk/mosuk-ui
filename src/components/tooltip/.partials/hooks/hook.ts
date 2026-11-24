import type { UseTooltipProps } from '@/components/tooltip/.partials/hooks/hook.interface';
import { TooltipContext } from '@/components/tooltip/.partials/providers/context/context';
import { useContext } from 'react';

export function useTooltip(): UseTooltipProps {
  const context = useContext(TooltipContext);

  if (!context) {
    throw new Error('useTooltip must be used within Tooltip');
  }

  return context;
}
