import { InputGroupContext } from '@/components/input-group/.partials/providers/context/context';
import type { InputGroupContextProps } from '@/components/input-group/.partials/providers/context/context.interface';
import { useContext } from 'react';

export function useInputGroup(): InputGroupContextProps {
  const context = useContext(InputGroupContext);

  if (!context) {
    throw new Error('useInputGroup must be used within <InputGroup>');
  }

  return context;
}
