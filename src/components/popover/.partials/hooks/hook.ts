import type { UsePopoverProps } from '@/components/popover/.partials/hooks/hook.interface';
import { PopoverContext } from '@/components/popover/.partials/providers/context/context';
import { useContext } from 'react';

export function usePopover(): UsePopoverProps {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error('usePopover must be used within Popover');
  }

  return context;
}
